import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  role: {
    type: String, enum: ['user', 'ai'], required: true 
  },
  message: {
    type: String, required: true
  },
  timestamp: { 
    type: Date, default: Date.now
  }
});

// 🔁 Force it to use the "datas" collection
const Data = mongoose.model('Data', messageSchema, 'datas');

export default Data;
