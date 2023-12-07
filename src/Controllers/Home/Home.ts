import { RequestHandler } from "express";

const Home: RequestHandler = (_req, res) => {
  return res.status(200).json({
    status: "nice",
  });
};

export default Home;
