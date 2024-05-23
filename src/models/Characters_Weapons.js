import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';
import Characters from './Characters.js';
import Weapons from './Weapons.js';


const Characters_Weapons = sequelize.define('characters_weapons', {
    character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Characters,
            key: 'id'
        }
    },
    weapon_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Weapons,
            key: 'id'
        }
    }
});

export default Characters_Weapons;