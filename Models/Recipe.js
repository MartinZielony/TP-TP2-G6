import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../connection/connection.js";

class Recipe extends Model {

}

Recipe.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Los aributos de la receta que se presenten en listas vienen en formato JSON, ya que MySQL no soporta tipos de arrays nativamente.
        steps: {
            type: DataTypes.JSON,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.JSON,
            allowNull: false
        }
    },
    {
        sequelize: connection,
        modelName: "Recipe",
    }
);

export default Recipe;