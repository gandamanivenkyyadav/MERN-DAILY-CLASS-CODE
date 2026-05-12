const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const pollRoutes = require('./routes/polls');
const authRoutes = require('./routes/auth');
const upload = multer({ dest: 'uploads/' });

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: process.env.NODE_ENV === 'production' ? false : '*' }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static('uploads'));

// MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quickpoll-teams')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Socket.IO - Real-time Updates
io.on('connection', (socket) => {
  socket.on('join-poll', (pollId) => {
    socket.join(pollId);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Routes
app.use('/api/polls', pollRoutes);
app.use('/api/auth', authRoutes);

// Broadcast function
const broadcastPollUpdate = (pollId, poll) => {
  io.to(pollId).emit('poll-update', poll);
};

module.exports = { app, server, io, broadcastPollUpdate };

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server + Socket.IO running on http://localhost:${PORT}`);
});