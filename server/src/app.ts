import express, { Express } from "express";
import cors from "cors";
import path from "path";
import { events } from "./events";

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.get("/api/events", (req, res) => {
  res.json(events);
});
app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});
