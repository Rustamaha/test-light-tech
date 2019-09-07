const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	img: { data: Buffer, contentType: String },
	name: String,
  price: Number,
  weight: Number,
  ribbon: String,
  pictureUri: String,
  category: String,
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;