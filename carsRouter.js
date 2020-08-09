import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET /cars");
  res.send("GET /cars");
});

router.get("/prices", (req, res) => {
  console.log("GET /cars/prices");
  res.send("GET /cars/prices")
});

export default router;