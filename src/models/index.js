import User from "./User";
import Characters from "./Characters";
import Races from "./Races";
import Atributes from "./Atributes";
import Classes from "./Classes";
import Wepons from "./Wepons";
import Characters_Wepons from "./Characters_Wepons";



(async () => {
    await User.sync({ force: true });
    await Races.sync({ force: true });
    await Atributes.sync({ force: true });
    await Classes.sync({ force: true });
    await Wepons.sync({ force: true });
    await Characters.sync({ force: true });
    await Characters_Wepons.sync({ force: true });
})();
