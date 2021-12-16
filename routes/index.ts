import express from "express";
import { checkIfAuthenticated } from "../middlewares/auth-middleware";
import { getUsersById, getAllUsers, register } from "../models/users";

const router = express.Router();

// modules HERE :

router.post("/register", register);

router.get("/users", checkIfAuthenticated, getAllUsers);
router.get("/:id", getUsersById);

module.exports = router;
