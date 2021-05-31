import * as express from "express";
import CategoryController from "../controllers/category-controller";

const CategoryRouter = express.Router();

CategoryRouter.route("/").get(CategoryController.get);
CategoryRouter.route("/:id").get(CategoryController.getById);
CategoryRouter.route("/create").post(CategoryController.createCategory);
CategoryRouter.route("/:id").put(CategoryController.update);
CategoryRouter.route("/:id").delete(CategoryController.delete);

export default CategoryRouter;