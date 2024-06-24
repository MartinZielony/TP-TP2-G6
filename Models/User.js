import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import Role from "./Role.js";
import { Recipe } from "./Recipe.js";

class User extends Model {
  comparePass = async (password) => {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, genSalt);
  user.password = hashedPassword;
});

function defineAssociations() {
  User.belongsTo(Role, { foreignKey: "roleId" });
  User.hasMany(Recipe, { foreignKey: "authorId", as: "recipes" }); 
}

export { User, defineAssociations };
