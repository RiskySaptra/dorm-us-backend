import { admin } from "../config/firebaseConfig";
const db = require("../config/dbConfig");

const getAuthToken = (req: any, res: any, next: any) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

export const checkIfAuthenticated = (req: any, res: any, next: any) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      const { rows } = await db.query(
        `select ug.group_tenant, ug.group_name from system.users u
        join system.user_group ug on u.user_group_id = ug.user_group_id
        WHERE google_uid = encrypt($1::bytea, $2, 'aes')::bytea`,
        [userInfo.uid, process.env.DB_KEY]
      );
      req.schemaname = rows[0].group_tenant;
      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};
