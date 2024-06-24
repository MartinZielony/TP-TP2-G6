import Role from "./Role.js";
import { User, defineAssociations as defineUserAssociations } from "./User.js";
import { Recipe, defineAssociations as defineRecipeAssociations } from "./Recipe.js";

defineUserAssociations();
defineRecipeAssociations();

Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });
User.hasMany(Recipe, { foreignKey: "authorId" });
Recipe.belongsTo(User, { foreignKey: "authorId" });

export { Role, User, Recipe };
