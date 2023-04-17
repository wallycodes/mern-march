const ProductController = require('../controllers/product.controller');

module.exports = app => {
    //this function is being sent to the sever.js file and being stored as a const TvShowRoutes
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.post('/api/newProducts', ProductController.createProducts);
    app.get('/api/oneProduct/:id', ProductController.findOneProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
} 




