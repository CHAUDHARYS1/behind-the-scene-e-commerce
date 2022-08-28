// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: ProductTag, 
  as: 'productTag_product',
  foreignKey: "tag_id"
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_product',
  foreignKey: 'product_it'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
