"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Home = (_req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    return res.status(200).json({
        status: "nice",
    });
};
exports.default = Home;
