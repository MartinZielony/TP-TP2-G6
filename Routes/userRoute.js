import { Router } from "express";
import UserController from "../Controllers/userController.js";
import { validateLogin } from "../middlewares/validateLogin.js";

const userController = new UserController();
const userRoute = Router();

userRoute.post("/login", userController.login);
userRoute.post("/", userController.createUser);

userRoute.get("/me", validateLogin, userController.me);
userRoute.use(validateLogin);
userRoute.get("/", userController.getAllUsers);
userRoute.get("/:id", userController.getUserById);
userRoute.put("/:id", userController.updateUser);
userRoute.delete("/:id", userController.deleteUser);

export default userRoute;