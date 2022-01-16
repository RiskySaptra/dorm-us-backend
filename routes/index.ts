import express from "express";
import { checkIfAuthenticated } from "../middlewares/auth-middleware";
import { registerJoi } from "../middlewares/joi-middleware";
import { getUsersById, getUserGroup, register } from "../models/users";

const router = express.Router();

// modules HERE :

// modul user
router.post("/register", registerJoi, register);
// delete this
router.get("/users", checkIfAuthenticated, getUserGroup);
router.get("/:id", getUsersById);

module.exports = router;
