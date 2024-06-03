import Characters from "../models/Characters";
import Attributes from "../models/Attributes";


const createCharacter = async (req, res) => {
    try {
        const { user_id, name, class_id, race_id } = req.body;
        const character = await Characters.create({ user_id, name, class_id, race_id });

        const attributes = await Attributes.create({});

       await character.update({ attribute_id: attributes.id });
        
        return res.status(201).json({ character, attributes });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

export default { createCharacter };