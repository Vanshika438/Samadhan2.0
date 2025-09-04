const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));

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

    const PORT = process.env.PORT || 5000; 
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('DB error:', err.message);
    process.exit(1);
  }
}
start();
