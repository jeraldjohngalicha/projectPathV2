import express from 'express';
import mongoose from 'mongoose';

import profileRoutes from './routes/profileRoutes';

const app = express();
app.use('/profileRoutes', profileRoutes);

mongoose.connect('mongodb://localhost:27017/ppv2_master');
mongoose.connection.on('open', () => {
    console.log("Connection to MongoDB server established");
});

app.listen(4000, () => {
    console.log('Connected to port 4000');
});