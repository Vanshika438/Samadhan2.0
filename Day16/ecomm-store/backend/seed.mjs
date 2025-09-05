
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Error: MONGODB_URI is not defined in .env');
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB for seeding...');

    const db = client.db('ecomm-store'); // Use the same database name as in your API route
    const productsCollection = db.collection('products');

    // Optional: Clear existing data
    await productsCollection.deleteMany({});
    console.log('Cleared existing products.');

    // Read the JSON file from the frontend's data directory
    const jsonPath = path.join(process.cwd(), '..', 'frontend', 'data', 'products.json');
    const products = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    // The JSON file has 'id' but MongoDB uses '_id'. We can let MongoDB generate unique _id's.
    // We'll remove the 'id' field before insertion.
    const productsToInsert = products.map(({ id, ...rest }) => rest);

    // Insert the data
    const result = await productsCollection.insertMany(productsToInsert);
    console.log(`Successfully inserted ${result.insertedCount} products.`);

  } catch (e) {
    console.error('Failed to seed database:', e);
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}

seed();
