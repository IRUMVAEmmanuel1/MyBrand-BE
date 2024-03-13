// config/db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await "mongodb+srv://Irumva:IrumvaEmmanuel97@cluster0.ws2ver4.mongodb.net/",
    { useNewUrlParser: true ,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

export default connectDB;
