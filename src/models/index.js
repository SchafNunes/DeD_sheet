import User from "./User";
import Characters from "./Characters";



// (async () => {
//     User.sync({ force: true });
//     Characters.sync({ force: true });
// })();

User.sync().then(() => {
    // Depois que o modelo User for sincronizado, sincronize o modelo Characters
    Characters.sync();
  });