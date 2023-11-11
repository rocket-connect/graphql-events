import express, { Express } from "express";
import cors from "cors";
import path from "path";

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});
