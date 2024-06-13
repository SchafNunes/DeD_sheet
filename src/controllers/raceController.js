import Races from "../models/Races";


const getAllRaces = async (req, res) => {
    try {
        const races = await Races.findAll();
        return res.status(200).send({
            type: "success",
            message: "Raças consultadas com sucesso",
            data: races
        });
    }
    catch (err) {
        return res.status(500).send({
            type: "error",
            message: "Erro ao buscar raças",
            data: err
        });
    }
}


export default { getAllRaces };