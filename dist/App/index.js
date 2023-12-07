"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
// import ExpandRouter from "../Helpers/ExpandRouter";
// import Routes from "../Routes";
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
app.get("/api", (req, res) => {
    const path = `/api/item/${(0, uuid_1.v4)()}`;
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
app.get("/api/item/:slug", (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
});
module.exports = app;
