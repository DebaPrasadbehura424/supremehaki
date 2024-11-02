import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 3000;
const URI = process.env.MangoDBURI;

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Port running... ${port}`);
});
