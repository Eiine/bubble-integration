import { Router } from "express";
import { getdata } from "../controller/get-get.js";
const router = Router();

router.get("/", getdata);

export default router;
