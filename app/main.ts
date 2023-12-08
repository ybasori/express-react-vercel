import express from "express";

// import { v4 } from "uuid";
import ExpandRouter from "./Helpers/ExpandRouter";
import Routes from "./Routes";

const app = express();

// app.use(express.static("./public"));

ExpandRouter(Routes()).forEach((item) =>
  item.controller && item.method
    ? app[item.method](
        item.path,
        item.middleware ? item.middleware : [],
        item.controller
      )
    : null
);

export default app;
