// module index

const users = require("./user/index");

module.exports = (app: any) => {
  app.use("/users", users);
};
