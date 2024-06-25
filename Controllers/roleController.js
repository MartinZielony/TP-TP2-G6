import { Role, User } from "../Models/models.js"
//Controlador del modelo Role, gestiona las funciones CRUD a ser ejecutadas desde los endpoints

class RoleController {
    async getAllRoles(req, res) {
        try {
            const result = await Role.findAll({
                attributes: ["id", "name"]
            });
            if (result.length == 0) {throw new Error("No hay roles!")}
            res.status(200).send({ success: true, message: result });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    async getRoleById(req, res) {
        try {
            const { id } = req.params;
            const result = await Role.findByPk(id);
            if (result == null) {throw new Error("No se encontró el rol!")}
            res.status(200).send({ success: true, message: result })
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }
    async createRole(req, res) {
        try {
            const { name } = req.body;
            const result = await Role.create({
                name
            });
            res.status(200).send({ success: true, message: result });
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    async updateRole(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            if (!await Role.findByPk(id)) {throw new Error("No se encontró el rol!")}
            const result = await Role.update(
                { name },
                {
                    where: {
                        id
                    }
                }
            );
            res.status(200).send({ success: true, message: "rol modificado con exito" })
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    async deleteRole(req, res) {
        try {
            const { id } = req.params
            if (!await Role.findByPk(id)) {throw new Error("No se encontró el rol!")}
            const result = await Role.destroy({
                where: {
                    id
                }
            })
            res.status(200).send({success: true, message: "rol eliminado con exito"})
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
}

export default RoleController;