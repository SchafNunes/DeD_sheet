import User from "./User";
import Characters from "./Characters";
import Races from "./Races";
import Atributes from "./Atributes";
import Classes from "./Classes";



(async () => {
    await User.sync({ force: true });
    await Races.sync({ force: true });
    await Atributes.sync({ force: true });
    await Classes.sync({ force: true });
    await Characters.sync({ force: true });
})();
