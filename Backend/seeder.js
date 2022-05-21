import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/usermodel.js";
import Product from "./models/productmodel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

//config .env
dotenv.config();

//connect to database
connectDB();

//import data to database
const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createUsers = await User.insertMany(users);

        const adminUser = createUsers[0]._id;

        const sampleProducts = products.map( product => {
            return{ ...product , user: adminUser}
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported Successfully!');
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}


//import data to database
const deletedData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log('Data Deleted Successfully!');
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

if (process.argv[2] === "-d") {
    deletedData();
} else {
    importData();
}