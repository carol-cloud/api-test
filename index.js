import express from "express";
import carsRouter from "./carsRouter.js";

const app = express();
app.use(express.json());

app.use("/cars", carsRouter);

app.use((req, res, next)=> {
  console.log(new Date());
  next();
});

app.get("/teste", (req, res) => {
  throw new Error("Error message test");
});

//função async - tratamento de erro
app.post("/", async (req,res,next) => {
  try{
    throw new console.error("Error async");
  } catch (err) {
    next(err);
  }
});

//tratamento de erro - síncrono
app.use((err, req, res, next) => {
  console.log("Error 1");
  next(err);
})

app.use((err, req, res, next) => {
  console.log("Error 2");
  res.status(500).send("Ocorreu um erro, tente novamente mais tarde.")
})

app.listen(3000, () => {
  console.log("API Started");
});