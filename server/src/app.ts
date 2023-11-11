import express, { Express } from "express";

export const app: Express = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});
