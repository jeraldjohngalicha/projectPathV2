import express from 'express';
import mongoose from 'mongoose';

const app = express();

const dbCon = mongoose.connect('mongodb://demoaccount:demoaccount1@ds111244.mlab.com:11244/ppv2');


app.listen(4000, () => {
    console.log('Connected to port 4000');
});