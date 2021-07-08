import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes.js";

const dbURI =
  "mongodb+srv://amalfkhan:amalfkhan23@cluster0.da06f.mongodb.net/duck-feed";
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("failed db connection: " + err.message);
  });
