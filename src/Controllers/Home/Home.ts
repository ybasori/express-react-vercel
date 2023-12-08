import { RequestHandler } from "express";
import path from "path";

const Home: RequestHandler = (_req, res) => {
  return res.sendFile(path.resolve("src/Templates/Default/index.html"));
};

export default Home;
