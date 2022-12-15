import express, { Router } from "express";
import productsService from "../Services/products.service";

const productsRouter: Router = express.Router();
const products = new productsService();

productsRouter.get("/", (req, res) => {
  res.json(products.get());
});

productsRouter.get("/filter", (req, res) => {
  res.send("i'm filter");
});

productsRouter.get("/:productId", (req, res) => {
  const { productId } = req.params;
  const product = products.getOne(productId);
  res.json(product);
});

productsRouter.post("/", (req, res) => {
  const body = req.body;
  const newProduct = products.create(body);
  res.status(201).json(newProduct);
});

productsRouter.patch("/:productId", (req, res) => {
  const { productId } = req.params;
  const changes = req.body;
  const newChange = products.update(productId, changes);
  res.status(201).json(newChange);
});

productsRouter.delete("/:productId", (req, res) => {
  const { productId } = req.params;
  const deleteProduct = products.delete(productId);
  res.status(201).json(deleteProduct);
});

export default productsRouter;
