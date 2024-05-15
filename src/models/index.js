import User from "./User";
import Characters from "./Characters";
import Races from "./Races";



(async () => {
    await User.sync({ force: true });
    await Races.sync({ force: true });
    await Characters.sync({ force: true });
})();
