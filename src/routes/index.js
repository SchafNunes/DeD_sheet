import characterRoute from "./characterRoute";
import userRoute from "./userRoute";
import attributeRoute from "./attributeRoute";



function Routes(app) {
    characterRoute(app);
    userRoute(app);
    attributeRoute(app);
}

export default Routes;