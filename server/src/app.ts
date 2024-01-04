import express, { Express } from "express";
import cors from "cors";
import path from "path";
import { events } from "./events";
import { meetups } from "./meetups";

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/meetups", (req, res) => {
  res.json(meetups);
});

app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});
