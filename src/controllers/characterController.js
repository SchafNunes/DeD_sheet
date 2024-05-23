import Characters from "../models/Characters";

//Criar um metodo para inserir um personagem inicialmente com user_id, name

const createCharacter = async (req, res) => {
    try {
        const { user_id, name, class_id } = req.body;
        const character = await Characters.create({ user_id, name, class_id });
        return res.status(201).json({ character });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

export default { createCharacter };