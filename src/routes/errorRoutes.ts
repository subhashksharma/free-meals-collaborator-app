import express, { Request, Response } from "express";
import { body } from "express-validator";

import * as errorController from "../controller/appErrorController";

const errorRoutes = express.Router();

errorRoutes.all("/*", errorController.get404);

export { errorRoutes };
