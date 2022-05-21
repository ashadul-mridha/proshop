import express from "express";
import Product from '../models/productmodel.js';
const router = express.Router();

router.get('/', async(req,res) => {
    try {
        const products = await Product.find({});
        res.send({
            message: 'data get successfull',
            data : products,
            status: 200
        })
    } catch (error) {
        res.send({
            message: error.message,
            data : [],
            status: 400
        })
    }
    
})

router.get('/:id', async (req,res) => {

    try {
        const data = await Product.findById({_id: req.params.id});

        if (data) {
            res.send({
                message: 'data get successfull',
                data : data,
                status: 200
            })
        } else {
            res.status(404);
            throw new Error('product not found')
        }

        
    } catch (error) {
        
        res.send({
            message: error.message,
            data : [],
            status: 400
        })
    }
    
})

export default router;