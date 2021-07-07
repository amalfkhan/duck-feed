import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const CONNECTION_URL =
  "mongodb+srv://amalfkhan:amalfkhan23@cluster0.da06f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.error(e.message);
  });
