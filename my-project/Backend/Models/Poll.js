const mongoose = require('mongoose');
const shortid = require('shortid');

const pollSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  type: { type: String, enum: ['single', 'multiple', 'ranking'], default: 'single' },
  options: [{
    text: { type: String, required: true },
    image: String,
    votes: { type: Number, default: 0 },
    voters: [String] // IP + optional name
  }],
  settings: {
    anonymous: { type: Boolean, default: true },
    requireName: { type: Boolean, default: false },
    showResults: { type: String, enum: ['always', 'after-vote', 'creator-only'], default: 'always' },
    password: String,
    deadline: Date
  },
  totalVotes: { type: Number, default: 0 },
  comments: [{
    name: String,
    text: String,
    createdAt: { type: Date, default: Date.now }
  }],
  isClosed: { type: Boolean, default: false },
  webhookUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Poll', pollSchema);