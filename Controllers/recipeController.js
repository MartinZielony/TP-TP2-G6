import { Recipe } from "../Models/models.js";
//Controlador del modelo Receta, gestiona las funciones CRUD a ser ejecutadas desde los endpoints.

class RecipeController {
    /**
     * Devuelve todas las recetas.
     * @param {req} req Obligatorio para el metodo, por más que no se use
     * @param {res} res Devuelve el status y un mensaje; este incluye todas las recetas en un JSON o un mensaje de error si lo hubiera.
     */
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
    /**
     * Devuelve una receta de acuerdo al id recibido
     * @param {req} req Incluye el id por el cual se filtra
     * @param {res} res Devuelve el status y un mensaje; este incluye la receta solicitada en un JSON o un mensaje de error si lo hubiera.
     */
    async getRecipeById(req, res) {
        try {
            const { id } = req.params;
            const result = await Recipe.findByPk(id);
            res.status(200).send({ success: true, message: result });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    /**
     * Crea una nueva receta con la información recibida
     * @param {req} req Incluye la informacion de la receta
     * @param {res} res Devuelve el status y un mensaje; este será de éxito si la receta se pudo crear o de error si no, incluyendo el mensaje de error.
     */
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
    /**
     * Actualiza una receta en base a la informacion recibida en el req
     * @param {req} req Incluye los datos que se quieran actualizar y su nuevo valor
     * @param {res} res Devuelve el status y un mensaje; este será de éxito si la receta se pudo actualizar o de error si no, incluyendo el mensaje de error.
     */
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

    /**
     * Elimina una receta de acuerdo al id pasado en el req
     * @param {req} req Incluye el id de la receta que se quiera eliminar
     * @param {res} res Devuelve el status y un mensaje; este será de éxito si la receta se pudo eliminar o de error si no, incluyendo el mensaje de error.
     */
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