import User from "./User";
import Characters from "./Characters";
import Races from "./Races";
import Attributes from "./Attributes";
import Classes from "./Classes";
import Weapons from "./Weapons";
import Characters_Wepons from "./Characters_Weapons";
import Equipaments from "./Equipaments";
import Characters_Equipaments from "./Characters_Equipaments";
import Armors from "./Armors";
import Character_Armors from "./Character_Armors";
import Class_Features from "./Class_Features";
import seedDatabase from "./Input_Dados";



(async () => {
    await User.sync({ force: true });
    await Races.sync({ force: true });
    await Attributes.sync({ force: true });
    await Classes.sync({ force: true });
    await Weapons.sync({ force: true });
    await Equipaments.sync({ force: true });
    await Armors.sync({ force: true });
    await Characters.sync({ force: true });
    await Characters_Wepons.sync({ force: true });
    await Characters_Equipaments.sync({ force: true });
    await Character_Armors.sync({ force: true });
    await Class_Features.sync({ force: true });
    seedDatabase();
})();

