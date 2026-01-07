import express, { type Request, type Response } from "express";

const app = express();
const port = 3000;

app.post("/health", (req: Request, res: Response) => {});

app.get("/health", (req: Request, res: Response) => {
  res.send("Health is ok");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`✅ Server is running at: http://localhost:${port}`);
});
