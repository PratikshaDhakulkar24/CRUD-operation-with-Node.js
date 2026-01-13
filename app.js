const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

app.get('/category', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/category.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/product.html'));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
