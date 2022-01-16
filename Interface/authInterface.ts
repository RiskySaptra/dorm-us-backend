import { Request, Response, NextFunction } from "express";

export interface getAuthTokenValidatorRequest extends Request {
  authToken?: string;
  user: {
    user_id: number;
    user_group_id: number;
    group_tenant: string;
    group_name: string;
  };
}
