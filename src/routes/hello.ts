import helloControler from "../controller/hello-controler";
import { useRouter } from "../utils/router";

const router = useRouter();

router.get("/", helloControler.get);

export default router;
