import dotenv from "dotenv";
dotenv.config();

export const STATIC_FOLDER =
  (process.env.STATIC_FOLDER as string) || "../../client/build";

export const HTTP_PORT = (process.env.HTTP_PORT as string) || "3000";
