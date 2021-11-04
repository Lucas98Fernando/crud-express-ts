import express from "express";
import path from "path";
import cors from "cors";
const app = express();
import routes from "./routes";
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const port = process.env.API_PORT || 5000;

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`API rodando em: http://localhost:${port}`);
});
