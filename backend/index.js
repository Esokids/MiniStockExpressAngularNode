const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { ok } = require("assert");

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: uuidv4(), name: "Orange", price: "10" },
  { id: uuidv4(), name: "Apple", price: "20" },
  { id: uuidv4(), name: "Carrot", price: "30" },
];

app.get("/products", (req, res) => {
  // console.log(products);
  res.sendStatus(200).send(products);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  products.push({ id: uuidv4(), name, price });
  // console.log(products);
  res.sendStatus(201);
});

app.delete("/products/:id", (req, res) => {
  products = products.filter((x) => x.id != req.params.id);
  res.sendStatus(200);
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;

  let product = products.find((x) => x.id == id);
  product.name = name;
  product.price = price;

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("app listening at http://localhost:3000");
});
