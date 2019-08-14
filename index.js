const Product = require('./database/models/product');
const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});

const arr = [
	{
		name: 'Абокадо с авокадо',
  	price: 55,
  	weight: 60,
  	ribbon: 'Veg',
  	pictureUri: 'sushi_avocado',
  	categories: 'sushi',
	},
	{
		name: 'Эби с креветкой',
  	price: 85,
  	weight: 55,
  	ribbon: 'Hit',
  	pictureUri: 'sushi_ebi',
  	categories: 'sushi',
	},
	{
		name: 'Магуро с тунцом',
  	price: 95,
  	weight: 50,
  	ribbon: '',
  	pictureUri: 'sushi_maguro',
  	categories: 'sushi',
	},
	{
		name: 'Унаги с копченым угрем',
  	price: 110,
  	weight: 65,
  	ribbon: '',
  	pictureUri: 'sushi_unagi',
  	categories: 'sushi',
	},
	{
		name: 'Сякэ с лососем',
    price: 75,
    weight: 50,
    ribbon: 'Hit',
    pictureUri: 'Sushi_Syake_Kunsei.jpg',
    categories: 'sushi',
	},
	{
		name: 'Филадельфия с лососем',
    price: 435,
    weight: 250,
    ribbon: 'Hit',
    pictureUri: 'Roll_Philadelphiya.jpg',
    categories: 'rolls',
	},
	{
		name: 'Сяке ролл с лососем',
    price: 210,
    weight: 190,
    ribbon: '',
    pictureUri: 'Roll_Syake.jpg',
    categories: 'rolls',
	},
	{
		name: 'Унаги ролл с угрем',
    price: 245,
    weight: 190,
    ribbon: 'Hit',
    pictureUri: 'Roll_Uhagi.jpg',
    categories: 'rolls',
	},
	{
		name: 'Яки Хамачи с жареным желтохвостиком',
    price: 55,
    weight: 230,
    ribbon: '',
    pictureUri: 'Roll_Talat.jpg',
    categories: 'rolls',
	}
];

Product.insertMany(arr, (err, doc) => console.log(doc));