import express, { Express } from "express";
import * as config from "./config";
import cors from "cors";
import expressStaticGzip from "express-static-gzip";

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(expressStaticGzip(config.STATIC_FOLDER, {}));
