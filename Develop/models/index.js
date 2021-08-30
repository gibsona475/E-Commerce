// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - One Product to One Category - Sport SHoe -SHoe  -category_id
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products - One Category  to Many Products - Jackets - Faux, Winter, Fall, Summer 
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag) - Many Product - Many Tags - Rebook Shoe - [Red, White , Sporty] - Nikes Shoe [ Red, White , Sporty, Silver]
Product.belongsToMany(Tag, {
   // Define the third table needed to store the foreign keys
   through: {
    model: ProductTag,
    foreignKey:'product_id'
  },
  // Define an alias for when data is retrieved
  // as: 'product_tags'

})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
   model: ProductTag,
   foreignKey:'tag_id'
 },
 // Define an alias for when data is retrieved
//  as: 'tags_product'

})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
