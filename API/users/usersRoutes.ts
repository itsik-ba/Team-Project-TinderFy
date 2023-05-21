import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
getAllUsers,
// updataUser,


} from "./usersControlls";

router
.get("/getusers", getAllUsers)
.post("/register", addNewUser)
.post("/login", userLogin)
// .patch("/updatauser", updataUser)

export default router