import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


//DB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

app.get('/api', (req, res) => {
  res.send("good")
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});