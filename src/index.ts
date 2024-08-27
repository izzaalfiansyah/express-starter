import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("It's worked!");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

export default app;
