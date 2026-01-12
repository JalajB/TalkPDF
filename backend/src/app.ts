import express, { type Request, type Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => {
  res.send("Health is ok");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
