import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
newProfile,
renderHome,


} from "./usersControlls";

router
.get("/", renderHome)
.post("/add-User", addNewUser)
.post("add-User/newProfile", newProfile)
.post("/login", userLogin)








export default router