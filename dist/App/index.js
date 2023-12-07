"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
// import { v4 } from "uuid";
// import ExpandRouter from "../Helpers/ExpandRouter";
// import Routes from "../Routes";
// import Home from "@/Controllers/Home/Home";
const app = (0, express_1.default)();
// ExpandRouter(Routes()).forEach((item) =>
//   item.controller
//     ? app[item.method](
//         item.path,
//         item.middleware ? item.middleware : [],
//         item.controller
//       )
//     : null
// );
app.get("/api-dev", (_req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.end(`nice`);
});
module.exports = app;
