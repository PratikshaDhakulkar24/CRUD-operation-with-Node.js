const Category = require('../models/categoryModel');

exports.getAll = (req, res) => {
    Category.getAll((err, data) => {
        res.json(data);
    });
};

exports.create = (req, res) => {
    Category.create(req.body.name, () => res.sendStatus(200));
};

exports.update = (req, res) => {
    Category.update(req.params.id, req.body.name, () => res.sendStatus(200));
};

exports.remove = (req, res) => {
    Category.remove(req.params.id, () => res.sendStatus(200));
};
