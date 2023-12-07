"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = __importDefault(require("./Controllers/Home/Home"));
const Routes = () => {
    return [
        {
            path: "/",
            method: "get",
            controller: Home_1.default,
            children: [{ path: "/one", method: "get", controller: Home_1.default }],
        },
    ];
};
exports.default = Routes;
