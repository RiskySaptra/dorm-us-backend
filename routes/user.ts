// routing module
const Router = require("express-promise-router");
const db = require("../config/dbConfig");

// add function here as module content
// --

// init router
const router = new Router();

router.get("/", async (req: any, res: any) => {
  const { rows } = await db.query("SELECT * FROM development.users");
  res.send(rows);
});

router.get("/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const { rows } = await db.query(
    "SELECT * FROM development.users WHERE id = $1",
    [id]
  );
  res.send(rows);
});

module.exports = router;
