import express from "express";
import { getAllUsers } from "../Controllers/DB_Query_controller.js";
import passport from "passport";

const router = express.Router();

router.get("/", async (req, res) => {
  const userList = await getAllUsers();
  console.log("Hi from default route", userList);
  res.send(userList);
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

export default router;
