import express, { Request, Response } from "express";
import { body } from "express-validator";

import * as appLoginController from "../controller/appLoginController";

const loginRoutes = express.Router();
loginRoutes.get("/login", appLoginController.login);

export { loginRoutes };
