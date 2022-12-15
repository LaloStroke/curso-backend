import express, { Router } from "express";

const usersRouter: Router = express.Router();

usersRouter.get("/", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("nohay");
  }
});

export default usersRouter;
