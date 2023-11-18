const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const Product = require("./model/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongo is Connected");
  })
  .catch((err) => {
    console.log("Oh no error!");
    console.log(err);
  });

const products = [
  {
    name: "Apple",
    price: 1.5,
    category: "fruit",
  },
  {
    name: "Carrot",
    price: 0.75,
    category: "vegetable",
  },
  {
    name: "Milk",
    price: 2.0,
    category: "dairy",
  },
  {
    name: "Banana",
    price: 1.0,
    category: "fruit",
  },
  {
    name: "Spinach",
    price: 1.2,
    category: "vegetable",
  },
  {
    name: "Cheese",
    price: 3.5,
    category: "dairy",
  },
];

// Using insertMany to insert the example products into the database
Product.insertMany(products)
  .then((docs) => {
    console.log(`${docs.length} products inserted.`);
    console.log(docs)
  })
  .catch((err) => {
    console.error(err);
  });
