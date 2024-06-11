import attributeController from "../controllers/attributeController";

export default (app) => {   
    app.put('/attributes/:id', attributeController.updateAttribute);
    app.get('/attributes/:character_id', attributeController.getAttributes);
    // app.delete('/attributes/:id', attributeController.deleteAttribute);
}   