import characterController from "../controllers/characterController";

export default (app) => {
    app.post('/character', characterController.createCharacter);
    app.post('/characters/user', characterController.getCharactersByUser);
    app.get('/characters/:id', characterController.getCharacterById);
    app.delete('/characters/:id', characterController.deleteCharacterById);
}