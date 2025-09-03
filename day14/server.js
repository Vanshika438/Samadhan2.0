const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);

// health check
app.get('/', (req, res) => res.json({ ok: true, message: 'Auth API up' }));

// connect DB + start
async function start() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is not set');
    }
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set');
    }
    console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 4000, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT || 4000}`)
    );
  } catch (err) {
    console.error('DB error:', err.message);
    process.exit(1);
  }
}
start();
