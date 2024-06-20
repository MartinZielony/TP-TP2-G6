import { Router } from "express";
import userRoute from "./userRoute.js";
import recipeRoute from "./recipeRoute.js";

const routes = Router();
routes.use("/recipe", recipeRoute);
routes.use("/user", userRoute);

export default routes;