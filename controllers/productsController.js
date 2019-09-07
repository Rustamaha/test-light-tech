const Product = require('../database/models/product');

module.exports = {
    async index(req, res){
      const docs = await Product.find({})
        .then(docs => res.json(docs));
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
      Product.findByIdAndUpdate(id, req.body, { new: true })
        .then(doc => res.json(doc));
    },

    async delete(req, res){
    	const { id } = req.params;
      Product.findByIdAndDelete(id)
        .then(doc => res.json(doc));
    }
}