import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoute from './routes/productRouter.js';
import {notFoundMiddleware, defaultErrorMiddleware} from '../Backend/middleware/errorMiddleware.js';

const app = express();
dotenv.config();
app.use(cors());

//database connect
connectDB();

//all router
app.use('/api/products/',productRoute);


app.get('/', (req,res) => {
    res.send("app running...")
})

//not found error middleware
app.use(notFoundMiddleware)

//default middleware
app.use(defaultErrorMiddleware)




const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Runing Successfull On Port ${port}`);
})