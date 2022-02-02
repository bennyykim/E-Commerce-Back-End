// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasOne(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
