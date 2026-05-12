const express = require('express');
const Poll = require('../Models/Poll');
const QRCode = require('qrcode');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { broadcastPollUpdate } = require('../Server');
const router = express.Router();

// Create Poll
router.post('/create', async (req, res) => {
  try {
    const poll = new Poll({
      ...req.body,
      creator: req.user?._id || null
    });
    await poll.save();
    
    // Generate QR
    const pollUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/poll/${poll._id}`;
    const qrCode = await QRCode.toDataURL(pollUrl);
    
    res.json({ 
      success: true, 
      poll: poll,
      pollUrl,
      qrCode 
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Vote
router.post('/:id/vote', async (req, res) => {
  try {
    const { optionIndex, name } = req.body;
    const clientId = req.ip + (name || '');
    
    const poll = await Poll.findById(req.params.id);
    if (!poll || poll.isClosed) {
      return res.status(400).json({ error: 'Poll closed' });
    }
    
    if (poll.settings.password && poll.settings.password !== req.body.password) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    
    const option = poll.options[optionIndex];
    if (option.voters.includes(clientId)) {
      return res.status(400).json({ error: 'Already voted' });
    }
    
    option.votes += 1;
    option.voters.push(clientId);
    poll.totalVotes += 1;
    
    if (!poll.settings.anonymous && name) {
      poll.comments.push({ name, text: `Voted for "${option.text}"` });
    }
    
    await poll.save();
    broadcastPollUpdate(req.params.id, poll);
    
    res.json({ success: true, poll });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Poll
router.get('/:id', async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id).populate('creator', 'name');
    if (!poll) return res.status(404).json({ error: 'Poll not found' });
    
    // Check result visibility
    const userVoted = req.cookies.voted?.includes(req.params.id);
    if (poll.settings.showResults === 'after-vote' && !userVoted) {
      return res.json({ ...poll.toObject(), options: poll.options.map(o => ({ text: o.text })) });
    }
    
    res.json(poll);
  } catch (error) {
    res.status(404).json({ error: 'Poll not found' });
  }
});

// Export CSV
router.get('/:id/export', async (req, res) => {
  const poll = await Poll.findById(req.params.id);
  if (!poll) return res.status(404).json({ error: 'Poll not found' });
  
  const csvWriter = createCsvWriter({
    path: `export-${poll._id}.csv`,
    header: [{id: 'option', title: 'Option'}, {id: 'votes', title: 'Votes'}]
  });
  
  await csvWriter.writeRecords(poll.options.map(o => ({
    option: o.text,
    votes: o.votes
  })));
  
  res.download(`export-${poll._id}.csv`);
});

module.exports = router;