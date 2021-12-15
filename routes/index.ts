// module index
const users = require("./user/index");

module.exports = (app: any) => {
  app.get("/users", users);
  app.post("/register", users);
};
