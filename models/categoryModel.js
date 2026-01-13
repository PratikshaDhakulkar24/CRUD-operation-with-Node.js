const db = require('../db');

exports.getAll = (cb) => {
    db.query("SELECT * FROM categories", cb);
};

exports.create = (name, cb) => {
    db.query(
        "INSERT INTO categories(category_name) VALUES(?)",
        [name],
        cb
    );
};

exports.update = (id, name, cb) => {
    db.query(
        "UPDATE categories SET category_name=? WHERE category_id=?",
        [name, id],
        cb
    );
};

exports.remove = (id, cb) => {
    db.query(
        "DELETE FROM categories WHERE category_id=?",
        [id],
        cb
    );
};
