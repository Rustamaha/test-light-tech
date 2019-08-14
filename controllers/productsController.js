const Product = require('../database/models/product');
const url = 'https://cloud.mail.ru/public/foQh/3Y4d6BUtK';

module.exports = {
    async index(req, res){
      Product.find({}, (err, docs) => res.json(docs));
    },

    async create(req, res){
    	const product = new Product({
    		name: req.body.name,
				price: req.body.price,
				weight: req.body.weight,
				ribbon: req.body.ribbon,
				pictureUri: req.body.pictureUri,
        categories: req.body.categories,
			});
    	product.save()
        .then(product => res.json(product));
    },

    async edit(req, res){
    	const { id } = req.params;
      Product.findByIdAndUpdate(id, req.body, { new: true }, (err, doc) => {
        if (err) {
          throw err;
        } else {
          res.json(doc);
        }
      });
    },

    async delete(req, res){
    	const { id } = req.params;
      Product.findByIdAndDelete(id, (err, doc) => {
        if (err) {
          throw err;
        } else {
          res.json(doc);
        }
      });
    }
}