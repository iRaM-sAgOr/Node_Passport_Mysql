import express from "express";
import { getAllUsers } from "../Controllers/DB_Query_controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const userList = await getAllUsers();
  console.log("Hi from default route", userList);
  res.send(userList);
});

export default router;
