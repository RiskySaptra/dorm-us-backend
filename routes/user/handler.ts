const db = require("../../config/dbConfig");

// constoh try catch yang bener
// codenya di sesuaikan. code error postgreenya bisa di parsing kalau mau (kalau bisa pakai constant parsingnya. dibuatin table ntar)
const getUsersById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(
      "SELECT * FROM development.users WHERE id = $1",
      [id]
    );
    res.status(200).send(rows[0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllUsers = async (req: any, res: any) => {
  const { rows } = await db.query("SELECT * FROM development.users");
  res.send(rows);
};

export { getUsersById, getAllUsers };
