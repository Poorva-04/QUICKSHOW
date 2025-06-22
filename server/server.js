import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from './inngest/index.js'; // Adjust as per your project

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(clerkMiddleware());

    // Routes
    app.get('/', (req, res) => {
      res.send('Server is Live!');
    });
    app.use('/api/inngest', serve({ client: inngest, functions }));

    // Start server
    app.listen(port, () => {
      console.log(`🚀 Server is listening at http://localhost:${port}`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
})();
