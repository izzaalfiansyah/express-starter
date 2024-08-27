import { Router, type Express } from "express";
import path from "path";
import fs from "fs";

export const handleRouter = (app: Express) => {
  const routesDir = path.join(__dirname, "../routes");
  const routesFiles = fs.readdirSync(routesDir);

  routesFiles.forEach((file) => {
    const router: Router = require(path.join(routesDir, file)).default;
    app.use(`/${file.replace(".ts", "")}`, router);
  });
};

export const useRouter = () => {
  const router = Router();

  return router;
};
