const Router = require("express-promise-router");
const router = new Router();

// modules HERE :
import { getUsersById, getAllUsers, register } from "./handler";

router.post("/register", register);
router.get("/", getAllUsers);
router.get("/:id", getUsersById);

module.exports = router;
