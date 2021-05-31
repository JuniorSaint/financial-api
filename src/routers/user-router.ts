import * as express from "express";
import UserController from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.route("/").get(UserController.get);
userRouter.route("/:id").get(UserController.getById);
userRouter.route("/filter/:text").get(UserController.getFilter);
userRouter.route("/create").post(UserController.createUser);
userRouter.route("/:id").put(UserController.update);
userRouter.route("/:id").delete(UserController.delete);

export default userRouter;