import characterRoute from "./characterRoute";
import userRoute from "./userRoute";
import attributeRoute from "./attributeRoute";
import raceRoute from "./raceRoute";
import classRoute from "./classRoute";



function Routes(app) {
    characterRoute(app);
    userRoute(app);
    attributeRoute(app);
    raceRoute(app);
    classRoute(app);
}

export default Routes;