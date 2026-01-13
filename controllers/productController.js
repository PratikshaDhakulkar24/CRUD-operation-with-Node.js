const Product = require('../models/productModel');

exports.getAll = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    Product.getAll(limit, offset, (err, data) => {
        res.json(data);
    });
};

exports.create = (req, res) => {
    Product.create(req.body.name, req.body.category_id, () => res.sendStatus(200));
};

exports.update = (req, res) => {
    Product.update(
        req.params.id,
        req.body.name,
        req.body.category_id,
        () => res.sendStatus(200)
    );
};

exports.remove = (req, res) => {
    Product.remove(req.params.id, () => res.sendStatus(200));
};
