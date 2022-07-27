import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config()


const connect = () => mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });



app.listen(5000, () => {
    connect()
    console.log("Server connected");

})