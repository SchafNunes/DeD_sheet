import User from "./User";
import Characters from "./Characters";
import Races from "./Races";
import Atributes from "./Atributes";
import Classes from "./Classes";
import Wepons from "./Wepons";
import Characters_Wepons from "./Characters_Wepons";
import Equipaments from "./Equipaments";
import Characters_Equipaments from "./Characters_Equipaments";
import Armors from "./Armors";
import Character_Armors from "./Character_Armors";



(async () => {
    await User.sync({ force: true });
    await Races.sync({ force: true });
    await Atributes.sync({ force: true });
    await Classes.sync({ force: true });
    await Wepons.sync({ force: true });
    await Equipaments.sync({ force: true });
    await Armors.sync({ force: true });
    await Characters.sync({ force: true });
    await Characters_Wepons.sync({ force: true });
    await Characters_Equipaments.sync({ force: true });
    await Character_Armors.sync({ force: true });
})();
