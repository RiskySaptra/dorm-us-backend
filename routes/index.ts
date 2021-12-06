// module index

const users = require("./user");

module.exports = (app: any) => {
  app.use("/users", users);
};
