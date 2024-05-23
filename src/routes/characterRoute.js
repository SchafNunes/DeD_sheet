import characterController from "../controllers/characterController";

export default (app) => {
    app.post('/character', characterController.createCharacter);
}