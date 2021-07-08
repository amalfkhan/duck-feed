import express from "express";
import EntriesController from "./controllers/entries.controller.js";
import validation from "./middlewares/validation.js";
import schemas from "./helpers/validationSchemes.js";

const router = express.Router();

router.route("/").get(EntriesController.getAllEntries);
router
  .route("/entry")
  .post(validation(schemas.entry), EntriesController.addEntry); //validate input then add to db

export default router;
