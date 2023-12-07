import express from "express";

import ExpandRouter from "./Helpers/ExpandRouter";
import Routes from "./Routes";

const port = Number(process.env.PORT || 5000);

const app = express();

ExpandRouter(Routes()).map((item) =>
  item.controller
    ? app[item.method](
        item.path,
        item.middleware ? item.middleware : [],
        item.controller
      )
    : null
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`> ready on http://localhost:${port}`);
});
