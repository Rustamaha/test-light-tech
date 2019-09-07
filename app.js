const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
//const MONGODB_URI = 'mongodb+srv://ruslyandiya_31:xhR2DV3hxHDD6Pd@test-cluster-rustamaha-svafi.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());

require('./routes/routes')(app);

module.exports = app;