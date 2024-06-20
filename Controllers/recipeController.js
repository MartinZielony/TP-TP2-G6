import { Recipe } from "../Models/models.js";

class RecipeController {
    async getAllRecipes(req, res) {
        try {
            const result = await Recipe.findAll({
                attributes: ["id", "title", "image", "description", "steps", "ingredients"],
            });
            res.status(200).send({ success: true, message: result });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }
    async getRecipeById(req, res) {
        try {
            const { id } = req.params;
            const result = await Recipe.findByPk(id);
            res.status(200).send({ success: true, message: result });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    async createRecipe(req, res) {
        try {
            const { title, image, description, steps, ingredients } = req.body;
            const result = await Recipe.create({
                title,
                image,
                description,
                steps,
                ingredients
            });
            res.status(200).send({
                success: true,
                message: `Receta ${result.dataValues.title} creada con exito`,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }
    async updateRecipe(req, res) {
        try {
            const { id } = req.params;
            const { title, image, description, steps, ingredients } = req.body;
            const result = await Recipe.update(
                { title, image, description, steps, ingredients },
                {
                    where: {
                        id,
                    },
                }
            );
            res
                .status(200)
                .send({ success: true, message: "receta modificada con exito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    async deleteRecipe(req, res) {
        try {
            const { id } = req.params;
            const result = await Recipe.destroy({
                where: {
                    id,
                },
            });
            res
                .status(200)
                .send({ success: true, message: "Receta eliminada con exito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }
}

export default RecipeController;