import express from "express";

// import { v4 } from "uuid";
// import ExpandRouter from "../Helpers/ExpandRouter";
// import Routes from "../Routes";
// import Home from "@/Controllers/Home/Home";

const app = express();

// ExpandRouter(Routes()).forEach((item) =>
//   item.controller
//     ? app[item.method](
//         item.path,
//         item.middleware ? item.middleware : [],
//         item.controller
//       )
//     : null
// );

app.get("/", (_req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`nice`);
});

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

export = app;
