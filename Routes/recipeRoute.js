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