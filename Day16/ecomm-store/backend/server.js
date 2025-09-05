
require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000; // Backend will run on port 8000

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
let db;

async function connectToMongo() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('ecomm-store'); // Use the same database name as before
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

// API Route for Products
app.get('/api/products', async (req, res) => {
  try {
    if (!db) {
      await connectToMongo();
    }
    const products = await db.collection('products').find({}).toArray();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Start the server
app.listen(port, async () => {
  await connectToMongo();
  console.log(`Backend server listening at http://localhost:${port}`);
});
