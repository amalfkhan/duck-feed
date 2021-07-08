// functions to handle access/addition/modification of data in the db

import Entry from "../models/entry.js";

export default class EntriesController {
  static async getAllEntries(req, res) {
    try {
      const entries = await Entry.find();
      res.status(200).send(entries);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  static async addEntry(req, res) {
    try {
      const newEntry = new Entry(req.body);
      newEntry
        .save()
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          console.error("failed to save entry: " + err);
        });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}
