import express from "express"
import {
  getUserInfo,
  updateUserInfo,
} from "../controllers/user.js";

const router = express.Router()


router.get("/:id", getUserInfo);
router.put("/:id", updateUserInfo);



export default router;