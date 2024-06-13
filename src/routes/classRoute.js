import classController from "../controllers/classController";

export default (app) => {
    app.get('/classes', classController.getAllClasses);
}