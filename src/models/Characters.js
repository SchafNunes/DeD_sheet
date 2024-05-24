import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';
import User from './User.js';
import Races from './Races.js'
import Attributes from "./Attributes.js";
import Classes from "./Classes.js";
    
//table id, users_id foreing_key, name, races_id foreingkey, classes.id foreingkey
const Characters = sequelize.define('characters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    race_id: {
        type: DataTypes.INTEGER
    },
    attribute_id: {
        type: DataTypes.INTEGER
    },
    class_id: {
        type: DataTypes.INTEGER
    }
});

Characters.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Characters.belongsTo(Races, { foreignKey: 'race_id', as: 'raca' });
Characters.belongsTo(Attributes, { foreignKey: 'attribute_id', as: 'attribute' });
Characters.belongsTo(Classes, { foreignKey: 'class_id', as: 'class' });




export default Characters;
