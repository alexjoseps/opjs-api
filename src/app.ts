import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');

    const port = 3001;

    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('MongoDB conntection error'));
