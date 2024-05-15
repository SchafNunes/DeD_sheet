import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';
import Characters from './Characters.js';
import Equipaments from './Equipaments.js';


//table of relation between characters and equipaments
const Characters_Equipaments = sequelize.define('characters_equipaments', {
    character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Characters,
            key: 'id'
        }
    },
    equipament_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Equipaments,
            key: 'id'
        }
    }
});

export default Characters_Equipaments;