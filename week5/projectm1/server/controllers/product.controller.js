//funstions that connect to our routes

const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
            // or you can just return allshows in the object
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createProducts =(req,res) =>{
    Product.create(req.body)
        .then ((newProduct) =>{
            res.json({product: newProduct})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findOneProduct = (req, res) =>{
    // console.log(req.params)
    //req.params.id the "id" cannot be changed to another name here and in the routes section, must be same. 
    //params is an object
    Product.findOne({_id: req.params.id})
        .then((oneProduct)=>{
            res.json({product:oneProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        ) 
        .then((updatedProduct) => {
            res.json({show:updatedProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteProduct = (req,res) =>{
    Product.deleteOne({_id:req.params.id})
        .then((result) =>{
            res.json({result:result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}