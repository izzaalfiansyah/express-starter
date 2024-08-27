import { Router, type Express } from "express";
import helloControler from "../controller/hello-controler";
import path from "node:path";
import fs from "node:fs";

export const useRouter = () => {
  const router = Router();

  return router;
};

export const handleRouter = (app: Express) => {
  const routesDir = path.join(__dirname, "../routes");
  const routesFiles = fs.readdirSync(routesDir);

  routesFiles.forEach((file) => {
    const router: Router = require(path.join(routesDir, file)).default;
    const filePath = file.includes("index.ts")
      ? "/"
      : `/${file.replace(".ts", "")}`;

    app.use(filePath, router);
  });

  // app.get("/", (req, res) => {
  //   return res.send("It's Worked!");
  // });

  // app.get("/hello", helloControler.get);
};
