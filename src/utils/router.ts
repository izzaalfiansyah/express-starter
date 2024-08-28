import { Router, type Express } from "express";
import helloControler from "../controller/hello-controler";

export const useRouter = () => {
  const router = Router();

  return router;
};

export const handleRouter = (app: Express) => {
  app.get("/", (req, res) => {
    return res.send("It's Worked!");
  });

  app.get("/hello", helloControler.get);
};
