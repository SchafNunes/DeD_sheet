import characterRoute from "./characterRoute";
import userRoute from "./userRoute";


function Routes(app) {
    characterRoute(app);
    userRoute(app)
}

export default Routes;