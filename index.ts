import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("It's Worked!");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

export default app;
