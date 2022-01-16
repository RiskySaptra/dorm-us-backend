import { Request, Response } from "express";

export interface registerValidatorRequest extends Request {
  body: {
    email: String;
    password: string;
    firstName: string;
    lastName: string;
  };
}
