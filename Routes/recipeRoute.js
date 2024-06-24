// Definimos y organizamos las rutas para las operaciones CRUD relacionadas con las recetas. 
//Utilizamos el enrutador de Express para mapear las solicitudes HTTP a funciones específicas en el controlador recipeController.js.
import { Router } from "express";
import RecipeController from "../Controllers/recipeController.js";

const recipeController = new RecipeController();
const recipeRoute = Router();

recipeRoute.post("/", recipeController.createRecipe);

recipeRoute.get("/", recipeController.getAllRecipes);

recipeRoute.get("/:id", recipeController.getRecipeById);

recipeRoute.put("/:id", recipeController.updateRecipe);

recipeRoute.delete("/:id", recipeController.deleteRecipe);

export default recipeRoute;
