import express from "express";
import "dotenv/config";
import { handleRouter } from "./utils/router";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("It's worked!");
});

handleRouter(app);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

export default app;
