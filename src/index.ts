import express from "express";
import "dotenv/config";
import { handleRouter } from "./utils/router";

const app = express();
const port = process.env.PORT || 3000;

handleRouter(app);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

export default app;
