import Classes from "../models/Classes";

const getAllClasses = async (req, res) => {
    try {
        const classes = await Classes.findAll();
        return res.status(200).send({
            type: "success",
            message: "Classes consultadas com sucesso",
            data: classes
        });
    }
    catch (err) {
        return res.status(500).send({
            type: "error",
            message: "Erro ao buscar classes",
            data: err
        });
    }
}

export default { getAllClasses };