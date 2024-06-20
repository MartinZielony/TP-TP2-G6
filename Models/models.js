import Role from "./Role.js";
import User from "./User.js";
import Recipe from "./Recipe.js";

Role.hasMany(User, {foreignKey:"roleId"})
User.belongsTo(Role, {foreignKey:"roleId"})
Recipe.hasOne(User, {foreignKey: "userId"})

export {Role, User, Recipe}