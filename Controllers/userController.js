import { User, Role } from "../Models/models.js";
//Controlador del modelo Usuario, gestiona las funciones CRUD a ser ejecutadas desde los endpoints

class UserController {
  async getAllUsers(req, res) {
    try {
      const result = await User.findAll({
        attributes: ["id", "name", "mail", "roleId"],
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      if (result.length == 0) {throw new Error("No hay usuarios!")}
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const result = await User.findByPk(id);
      if (result == null) {throw new Error("No se encontró el usuario!")}
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const { name, mail, password, roleId } = req.body;
      const result = await User.create({
        name,
        mail,
        password,
        roleId,
      });
      res.status(200).send({
        success: true,
        message: `usuario ${result.dataValues.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, mail, password } = req.body;
      //Si no se encuentra el usuario el request falla, se tira error.
      if (!await User.findByPk(id)) {throw new Error("No se encontró el usuario!")}
      const result = await User.update(
        { name, mail, password },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      //Si no se encuentra el usuario el request falla, se tira error.
      if (!await User.findByPk(id)) {throw new Error("No se encontró el usuario!")}
      const result = await User.destroy({
        where: {
          id,
        },
      });
      res
        .status(200)
        .send({ success: true, message: "usuario eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const data = await User.findOne({
        where: {
          mail,
        },
      });
      if (!data) throw new Error("no podes pasar");
      const comparePass = await data.comparePass(password);
      if (!comparePass) throw new Error("no podes pasar");
      const payload = {
        id: data.id,
        name: data.name,
      };
      res
        .status(200)
        .send({ success: true, message: "usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;