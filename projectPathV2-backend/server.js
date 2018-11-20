import express from 'express';
import mongoose from 'mongoose';

import profileRoutes from './routes/profileRoutes';

const app = express();
app.use('/profileRoutes', profileRoutes);

const dbConn = mongoose.connect('mongodb://localhost:27017');

app.listen(4000, () => {
    console.log('Connected to port 4000');
});