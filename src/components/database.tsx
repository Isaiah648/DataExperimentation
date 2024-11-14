{/*import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string
    const mongoURI = 'mongodb+srv://isaiah2024:fire78@musicapp.inu7m.mongodb.net/?retryWrites=true&w=majority&appName=MusicApp';
    
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

// Example User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

// Example usage in your Express backend
import express from 'express';
const app = express();

app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email
    });
    
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

export { connectDB, User };*/}