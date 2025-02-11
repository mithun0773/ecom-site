const express = require("express");

const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/connectDatabase");
const cors = require("cors");
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

connectDatabase();




const products = require('./routes/product');
const orders = require('./routes/order');
app.use(express.json());
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders)


const PORT = process.env.PORT || 5000;


app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT} in ${process.env.NODE_ENV}....`)
});

