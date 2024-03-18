import express from 'express';
import connectDB from './config/db';
import blogRoutes from './routers/blogRoutes';
import { errorHandler } from './middleware/errorHandler';
// import commentRoutes from './routers/commentRoutes'
// import likeRoutes from './routers/likeRoutes'
// import authRoutes from './routers/authRoutes'
import userRouter from './routers/userRoutes';
import cors from 'cors';
import dotenv from 'dotenv'; 
const app = express();
const router = express.Router();
// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
dotenv.config();
// Routes
app.use('/api', blogRoutes);
// app.use('/api', commentRoutes);
app.use('/api/users', userRouter);
// app.use('/api', likeRoutes); 
// app.use('/api', authRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = router;