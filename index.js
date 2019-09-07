const express = require('express');
const Product = require('./database/models/product');
const app = require('./app');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port`, process.env.PORT);
});

/*const description = {
  'Sushi_abokado.jpg': {
    name: 'Абокадо с авокадо',
    price: 55,
    weight: 60,
    ribbon: 'Veg',
    category: 'sushi',
  },
  'Sushi_Ebi.jpg': {
    name: 'Эби с креветкой',
    price: 85,
    weight: 55,
    ribbon: 'Hit',
    category: 'sushi',
  },
  'Sushi_Maguro.jpg': {
    name: 'Магуро с тунцом',
    price: 95,
    weight: 50,
    ribbon: '',
    category: 'sushi',
  },
  'Sushi_Unagi.jpg': {
    name: 'Унаги с копченым угрем',
    price: 110,
    weight: 65,
    ribbon: '',
    category: 'sushi',
  },
  'Sushi_Syake_Kunsei.jpg': {
    name: 'Сякэ с лососем',
    price: 75,
    weight: 50,
    ribbon: 'Hit',
    category: 'sushi',
  },
  'Roll_Philadelphiya.jpg': {
    name: 'Филадельфия с лососем',
    price: 435,
    weight: 250,
    ribbon: 'Hit',
    category: 'roll',
  },
  'Roll_Syake.jpg': {
    name: 'Сяке ролл с лососем',
    price: 210,
    weight: 190,
    ribbon: '',
    category: 'roll',
  },
  'Roll_Tekka.jpg': {
    name: 'Тэкка ролл с тунцом',
    price: 245,
    weight: 190,
    ribbon: '',
    category: 'roll',
  },
  'Roll_Unagi.jpg': {
    name: 'Унаги ролл с угрем',
    price: 245,
    weight: 190,
    ribbon: 'Hit',
    category: 'roll',
  },
  'Roll_Talat.jpg': {
    name: 'Яки хамачи с жареным желтохвостиком',
    price: 55,
    weight: 230,
    ribbon: '',
    category: 'roll',
  }
};

const imgsDir = 'products/images';
const readImgAndStore = async dirPath => {
  await Product.deleteMany()
    .then(() => console.log('removed old docs'));
  await fs.readdir(dirPath)
    .then(files => files.forEach(async (img) => {
      const imgData = await fs.readFile(path.join(dirPath, img));
      const { name, price, weight, ribbon, category } = description[img];
      const product = new Product;
      product.img.data = imgData;
      product.img.contentType = 'image/jpeg';
      product.name = name;
      product.price = price;
      product.weight = weight;
      product.ribbon = ribbon;
      product.category = category;
      product.save();
    }));
};

readImgAndStore(imgsDir);*/