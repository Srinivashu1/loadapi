import { Router } from "express";
import usersRouter from "./users.js";
import productsRouter from "./products.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    name: "API",
    version: "1.0.0",
    routes: [
      { method: "GET", path: "/api" },
      { method: "GET", path: "/api/users" },
      { method: "POST", path: "/api/users" },
      { method: "GET", path: "/api/products" },
      { method: "GET", path: "/health" }
    ]
  });
});

router.use("/users", usersRouter);
router.use("/products", productsRouter);

export default router;


