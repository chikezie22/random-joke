import express from "express";
import { home } from "./home.controller.js";
const homeRouter = express.Router();
homeRouter.get("/", home);

export { homeRouter };
