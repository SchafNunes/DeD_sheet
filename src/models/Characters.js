import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';
import User from './User.js';
import Races from './Races.js'
import Atributes from "./Atributes.js";
import Classes from "./Classes.js";
    
//table id, users_id foreing_key, name, races_id foreingkey, classes.id foreingkey
const Characters = sequelize.define('characters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    races_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    classes_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Characters.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Characters.belongsTo(Races, { foreignKey: 'race_id', as: 'raca' });
Characters.belongsTo(Atributes, { foreignKey: 'atribute_id', as: 'atribute' });
Characters.belongsTo(Atributes, { foreignKey: 'class_id', as: 'class' });


export default Characters;
