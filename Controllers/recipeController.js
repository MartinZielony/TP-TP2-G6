import { Recipe, User } from "../Models/models.js";

class RecipeController {
    async getAllRecipes(req, res) {
        try {
            const recipes = await Recipe.findAll({
                attributes: ["id", "title", "image", "description", "steps", "ingredients"],
                include: {
                    model: User,
                    attributes: ["name"], 
                    as: 'author'  
                },
            });

            const formattedRecipes = recipes.map(recipe => ({
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                description: recipe.description,
                steps: recipe.steps,
                ingredients: recipe.ingredients,
                author: recipe.author.name 
            }));
            if (formattedRecipes.length == 0) {throw new Error("No hay recetas!")}
            res.status(200).send({ success: true, message: formattedRecipes });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async getRecipeById(req, res) {
        try {
            const { id } = req.params;
            const recipe = await Recipe.findByPk(id, {
                include: {
                    model: User,
                    attributes: ["name"], 
                    as: 'author' 
                },
            });
            if (recipe == null) {throw new Error("No se encontró la receta!")}
            const formattedRecipe = {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                description: recipe.description,
                steps: recipe.steps,
                ingredients: recipe.ingredients,
                author: recipe.author.name 
            };

            res.status(200).send({ success: true, message: formattedRecipe });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async createRecipe(req, res) {
        try {
            const { title, image, description, steps, ingredients, authorId } = req.body;
            const result = await Recipe.create({
                title,
                image,
                description,
                steps,
                ingredients,
                authorId, 
            });
            res.status(200).send({
                success: true,
                message: `Receta ${result.title} creada con éxito`,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async updateRecipe(req, res) {
        try {
            const { id } = req.params;
            const { title, image, description, steps, ingredients } = req.body;
            if (!await Recipe.findByPk(id)) {throw new Error("No se encontró la receta!")}
            const result = await Recipe.update(
                { title, image, description, steps, ingredients },
                { where: { id } }
            );
            res.status(200).send({ success: true, message: "Receta modificada con éxito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async deleteRecipe(req, res) {
        try {
            const { id } = req.params;
            const result = await Recipe.destroy({ where: { id } });
            if (!await Recipe.findByPk(id)) {throw new Error("No se encontró la receta!")}
            res.status(200).send({ success: true, message: "Receta eliminada con éxito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }
}

export default RecipeController;

// Este archivo contiene la lógica del negocio para manejar las operaciones relacionadas con las recetas. Se encarga de recibir las solicitudes de los clientes, interactuar con la base de datos a través del modelo Recipe, y devolver las respuestas adecuadas al cliente.