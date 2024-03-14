// config/db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await   mongoose.connect("mongodb+srv://emmanuelirumva1:IrumvaEmmanuel97@cluster0.awdasdh.mongodb.net")

    
    
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

export default connectDB;
