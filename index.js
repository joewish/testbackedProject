import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouter from "./src/features/user/user.routes.js";
import postRouter from "./src/features/posts/post.routes.js";
import cookieParser from "cookie-parser";
import { appLevelErrorHandlerMiddleware } from "./src/middlewares/errorHandler.js";


dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/posts",postRouter)

app.use(appLevelErrorHandlerMiddleware);

export default app;
