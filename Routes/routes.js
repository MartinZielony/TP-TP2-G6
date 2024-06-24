// Este archivo actúa como un punto central ya que registramos y manejamos todas las rutas definidas en los diferentes módulos de nuestra aplicación.

import { Router } from "express";
import userRoute from "./userRoute.js";
import recipeRoute from "./recipeRoute.js";
import roleRoute from "./roleRoute.js";

const routes = Router();
routes.use("/recipe", recipeRoute);
routes.use("/user", userRoute);
routes.use("/role", roleRoute);

export default routes;