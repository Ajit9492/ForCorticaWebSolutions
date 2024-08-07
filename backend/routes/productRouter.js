const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// Add a new product
router.post('/addproduct', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        area: req.body.area,
        status: req.body.status,
    });
    await product.save();
    res.json({
        success: true,
        product
    });
});

// Fetch all products
router.get('/getproducts', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

module.exports = router;
