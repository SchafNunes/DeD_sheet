import Attributes from "../models/Attributes";

const updateAttribute = async (req, res) => {  
    try {
        const { strength, dexterity, constitution, intelligence, wisdom, charisma } = req.body;
        const { id } = req.params; // Extract id from route parameters
        const attributes = await Attributes.update(
            { strength, dexterity, constitution, intelligence, wisdom, charisma }, 
            { where: { id } }
        );

        if (attributes[0] === 0) { // If no rows were affected
            return res.status(404).json({ error: 'Attributes not found' });
        }

        return res.status(200).json({ message: 'Attributes updated successfully' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

export default { updateAttribute };

