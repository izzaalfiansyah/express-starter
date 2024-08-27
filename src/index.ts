import express from "express";
import cors from "cors";
import "dotenv/config";
import { handleRouter } from "./utils/router";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

handleRouter(app);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

export default app;
