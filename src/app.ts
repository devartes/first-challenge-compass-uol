import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import db from "./db";
import routes from "./routes/routes";

dotenv.config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string);

app.use(express.json());

app.use("/", routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  db;
});
