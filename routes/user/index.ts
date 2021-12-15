// routing module
const Router = require("express-promise-router");
const router = new Router();

// modules HERE :
import { getUsersById, getAllUsers } from "./handler";

router.get("/", getAllUsers);
router.get("/:id", getUsersById);

module.exports = router;
