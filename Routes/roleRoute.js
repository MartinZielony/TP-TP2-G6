import { Router } from "express";
import RoleController from "../Controllers/roleController.js"

const roleController = new RoleController();
const roleRoute = Router();

roleRoute.get("/", roleController.getAllRoles)
roleRoute.get("/:id", roleController.getRoleById)
roleRoute.post("/", roleController.createRole);
roleRoute.put("/:id", roleController.updateRole)
roleRoute.delete("/:id", roleController.deleteRole)

export default roleRoute;

