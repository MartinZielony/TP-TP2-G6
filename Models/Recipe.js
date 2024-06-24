import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { User } from "./User.js";

class Recipe extends Model {}

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
        steps: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "Recipe",
    }
);

function defineAssociations() {
    Recipe.belongsTo(User, { foreignKey: "authorId", as: "author" });
}

export { Recipe, defineAssociations };
