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
      const newEntry = new Entry({
        name: "duck feeder 201",
        datetime: new Date(),
        location: "lohe",
        numFed: 22,
        feedType: "corn",
        feedAmount: "127",
      });
      newEntry
        .save()
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          console.error("Could not save new entry in addEntry() - e: " + err);
        });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}
