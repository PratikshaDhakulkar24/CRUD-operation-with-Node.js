const db = require('../db');

exports.getAll = (limit, offset, cb) => {
    db.query(
        `SELECT p.product_id, p.product_name,
                c.category_id, c.category_name
         FROM products p
         JOIN categories c ON p.category_id = c.category_id
         LIMIT ? OFFSET ?`,
        [limit, offset],
        cb
    );
};

exports.create = (name, catId, cb) => {
    db.query(
        "INSERT INTO products(product_name, category_id) VALUES (?,?)",
        [name, catId],
        cb
    );
};

exports.update = (id, name, catId, cb) => {
    db.query(
        "UPDATE products SET product_name=?, category_id=? WHERE product_id=?",
        [name, catId, id],
        cb
    );
};

exports.remove = (id, cb) => {
    db.query(
        "DELETE FROM products WHERE product_id=?",
        [id],
        cb
    );
};
