import { Router } from "express";

const router = Router();

// In-memory store for demo purposes
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const { name } = req.body || {};
  if (!name) {
    return res.status(400).json({ error: "'name' is required" });
  }
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const user = { id, name };
  users.push(user);
  res.status(201).json(user);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

export default router;


