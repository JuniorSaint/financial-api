import * as express from "express";
import AuthController from "../controllers/auth-controller";

const userRouter = express.Router();

userRouter.route("/auth/login").post(AuthController.login);

export default userRouter;