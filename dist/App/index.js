"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExpandRouter_1 = __importDefault(require("../Helpers/ExpandRouter"));
const Routes_1 = __importDefault(require("../Routes"));
const app = (0, express_1.default)();
(0, ExpandRouter_1.default)((0, Routes_1.default)()).forEach((item) => item.controller
    ? app[item.method](item.path, item.middleware ? item.middleware : [], item.controller)
    : null);
// app.get("/api", (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader("Content-Type", "text/html");
//   res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
// });
// app.get("/api/item/:slug", (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });
exports.default = app;
