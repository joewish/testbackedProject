import express from "express";
import {createNewPost,getOnePost} from "./post.controller.js"
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/").post(auth,createNewPost);
router.route("/:id").get(auth,getOnePost);
// router.route("/l").post(userLogin);
// router.route("/logout").get(userLogout);
// router.route("/update/password").post(auth, updateUserPassword);

export default router;
