"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
// import { v4 } from "uuid";
const ExpandRouter_1 = __importDefault(require("../Helpers/ExpandRouter"));
const Routes_1 = __importDefault(require("../Routes"));
const app = (0, express_1.default)();
(0, ExpandRouter_1.default)((0, Routes_1.default)()).forEach((item) => item.controller
    ? app[item.method](item.path, item.middleware ? item.middleware : [], item.controller)
    : null);
module.exports = app;
