// index.ts
import express from 'express';
import connectDB from './config/db';
import blogRoutes from './routers/blogRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', blogRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
