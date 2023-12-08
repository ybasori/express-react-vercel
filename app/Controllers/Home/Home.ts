import { RequestHandler } from "express";

const Home: RequestHandler = (_req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/assets/js/app.bundle.js"></script>
      <script src="/assets/js/runtime.bundle.js"></script>
    </body>
  </html>
  `);
};

export default Home;
