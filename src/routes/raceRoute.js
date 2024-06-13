import raceController from "../controllers/raceController";

export default (app) => {
    app.get('/races', raceController.getAllRaces);
}