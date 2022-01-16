import { admin } from "../config/firebaseConfig";
import { getAuthTokenValidatorRequest } from "../Interface/authInterface";
import { NextFunction } from "express";

const db = require("../config/dbConfig");

const getAuthToken = (
  req: getAuthTokenValidatorRequest,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = "";
  }
  next();
};

export const checkIfAuthenticated = (req: any, res: any, next: any) => {
  getAuthToken(req, async () => {
    const { authToken } = req;
    try {
      const userInfo = await admin.auth().verifyIdToken(authToken);
      const { rows } = await db.query(
        `select user_id, ug.user_group_id, ug.group_tenant, ug.group_name from system.users u
        join system.user_group ug on u.user_group_id = ug.user_group_id
        WHERE google_uid = $1`,
        [userInfo.uid]
      );
      req.user = rows[0];
      return next();
    } catch (err: any) {
      return res.status(401).send({
        error: `You are not authorized to make this request, ${err.message}`,
      });
    }
  });
};
