import { Router } from "express";

const router = Router();

// Static list for demo purposes
const products = [
  { id: "p1", name: "Laptop", price: 10002200 },
  { id: "p2", name: "Phone", price: 8000 }
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

export default router;


