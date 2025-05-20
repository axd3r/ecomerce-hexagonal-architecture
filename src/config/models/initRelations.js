const Product = require('../../App/products/domain/models/Products');
const Category = require('../../App/category/domain/models/Category');

Category.hasMany(Product, {
    foreignKey: "categoryId",
    as: "products"
});

Product.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category"
});
