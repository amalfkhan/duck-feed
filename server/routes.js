import express from "express";
import EntriesController from "./controllers/entries.controller.js";

const router = express.Router();

router.route("/").get(EntriesController.getAllEntries);
router.route("/entry").post(EntriesController.addEntry);

export default router;
