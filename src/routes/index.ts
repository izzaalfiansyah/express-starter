import { useRouter } from "../utils/router";

const router = useRouter();

router.get("/", (req, res) => {
  res.send("It's worked!");
});

export default router;
