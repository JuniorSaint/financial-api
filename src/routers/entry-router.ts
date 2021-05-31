import * as express from "express";
import EntryController from "../controllers/entry-controller";

const EntryRouter = express.Router();

EntryRouter.route("/").get(EntryController.get);
EntryRouter.route("/:id").get(EntryController.getById);
EntryRouter.route("/create").post(EntryController.createEntry);
EntryRouter.route("/:id").put(EntryController.update);
EntryRouter.route("/:id").delete(EntryController.delete);
EntryRouter.route("/dateLaunch/:dateIn/:dateEnd").get(EntryController.getByDate);
EntryRouter.route("/byEntry/entryList").get(EntryController.getByEntry);

export default EntryRouter;