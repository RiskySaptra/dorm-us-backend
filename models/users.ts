import { admin } from "../config/firebaseConfig";
import { Response } from "express";

const db = require("../config/dbConfig");

// interface modul
import { registerValidatorRequest } from "../Interface/usersInterface";

const register = async (req: registerValidatorRequest, res: Response) => {
  try {
    console.log(req.body, "emmeks");
    // const { email, password, firstName, lastName } = req.body;

    // const user = await admin.auth().createUser({
    //   email,
    //   // phoneNumber,
    //   password,
    //   displayName: `${firstName} ${lastName}`,
    //   // photoURL: photoUrl
    // });

    // await db.query(
    //   "insert into system.users(google_uid, display_name) values ($1, $2);",
    //   [user.uid, user.displayName]
    // );

    return res.send(req.body);
  } catch (error) {
    console.log(error, "errosnmuasd");
    return res.status(400).send(error);
  }
};

// const login = async (req: any, res: any) => {
//   const { email, password } = req.body;
//   try {
//     const userInfo = await admin
//       .auth()
//       .verifyIdToken(
//         "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1NmMwNDEwZmE1MjFjMTZlNDQ2NWE4ZjVjODU5NjZhNWY1MDk5NGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbW9uZXktZXhwZXJpbWVudC02YWFjNSIsImF1ZCI6Im1vbmV5LWV4cGVyaW1lbnQtNmFhYzUiLCJhdXRoX3RpbWUiOjE2Mzk2MTQ4MjgsInVzZXJfaWQiOiJPQmxWQVBtd2l3VXVlUnBITVdTQzNSUUVqTGsyIiwic3ViIjoiT0JsVkFQbXdpd1V1ZVJwSE1XU0MzUlFFakxrMiIsImlhdCI6MTYzOTYxNDgyOCwiZXhwIjoxNjM5NjE4NDI4LCJlbWFpbCI6Im1lZW1rc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVlbWtzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cJz0WFdojJg82YeyQybsslaR2SoevJowPvOXmeh91aEnM635RcY0Pm-VOAOJlo6pppX3YNZnfYSP1dDedAmasx6mEwGDy7t7nY4ESdA11yvQEaqsgUf7-_LLO15S-FeEvb4dIQZwRn5oHPB45a40bOS182m2rS6WtzJnaLmZGlAudzsQneniBYwjDTrFJyMORXQ2ZXXPf5eCfKTFKtHF5SThgiE-yjBRbm3eJWiFC19ejWojevsKOSWJwQKoXl5JVNlrksAGFArr9cLgZOmBX27Q19TlqAWokwiC1QbhvpH_XTXITYt5vaPAbat78CKswiNZJW2LKej88TbkNaGaVA"
//       );
//     res.status(200).send(userInfo);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

const getUsersById = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query(
      "SELECT * FROM system.users WHERE google_uid = encrypt($1::bytea, $2, 'aes')::bytea",
      [id, process.env.DB_KEY]
    );
    if (rows.length > 0) {
      return res.status(200).send(rows[0]);
    }
    res.status(200).send({ error: "user not Found" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserGroup = async (req: any, res: any) => {
  console.log(req);
  try {
    const userInfo = await admin.auth().verifyIdToken(req.authToken);
    console.log(userInfo);
  } catch (error: any) {
    console.log(error.message);
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }

  // const { user_group_id } = req.user;
  // console.log(req.user);
  // try {
  //   const { rows } = await db.query(
  //     "select * from system.users where user_group_id = $1;",
  //     [user_group_id]
  //   );
  //   res.send(rows);
  // } catch (error) {
  //   res.status(400).send(error);
  // }
};

export { getUsersById, getUserGroup, register };
