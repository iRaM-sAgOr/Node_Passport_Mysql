import express from "express";
import localRouter from "./routers/localLoginRoute.js";
import { getAllUsers } from "./Controllers/DB_Query_controller.js";
const app = express();

app.use(localRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke 💩");
});

app.listen(3001, () => {
  console.log("Server Is Running on port 3001");
});
