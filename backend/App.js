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
app.use(cors({
    origin: ["https://ecom-site-jvl.netlify.app", "http://localhost:3000"], // Allow frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow common HTTP methods
    credentials: true
}));
app.use('/api/v1/', products);
app.use('/api/v1/', orders)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT} in ${process.env.NODE_ENV || 'development'}....`);
});

