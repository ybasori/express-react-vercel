import express from "express";

// import { v4 } from "uuid";
import ExpandRouter from "./Helpers/ExpandRouter";
import Routes from "./Routes";

const app = express();

ExpandRouter(Routes()).forEach((item) =>
  item.controller
    ? app[item.method](
        item.path,
        item.middleware ? item.middleware : [],
        item.controller
      )
    : null
);

export default app;
