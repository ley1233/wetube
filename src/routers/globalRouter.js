import express from "express";
import {trending, search} from "../controllers/videoControll";
import {join, login} from "../controllers/usercontroll";

const globalRouter = express.Router();



globalRouter.get("/",trending);
globalRouter.get("/join", join)
globalRouter.get("/login",login);
globalRouter.get("/search", search)

export default globalRouter;
