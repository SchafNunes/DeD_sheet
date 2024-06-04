import attributeController from "../controllers/attributeController";

export default (app) => {   
    app.put('/attributes/:id', attributeController.updateAttribute);
    // app.get('/attributes/:id', attributeController.getAttribute);
    // app.delete('/attributes/:id', attributeController.deleteAttribute);
}   