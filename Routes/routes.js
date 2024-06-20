import { Router } from "express";
import userRoute from "./userRoute.js";
//import productRoutes from "./productRoutes.js";

const routes = Router();
//routes.use("/product", productRoutes);
routes.use("/user", userRoute);

export default routes;