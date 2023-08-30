import { Router } from "express";
import postRouter from "./post-data.js";
import getRouter from "./get-data.js";

const router = Router();

router.use("/post-data", postRouter);
router.use("/getdata", getRouter);

export default router;
