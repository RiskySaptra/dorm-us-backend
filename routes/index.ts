import express from "express";
const router = express.Router();

// modules HERE :
import { getUsersById, getAllUsers, register, login } from "../models/users";

router.post("/register", register);
router.post("/login", login);

router.get("/users", getAllUsers);
router.get("/:id", getUsersById);

module.exports = router;
