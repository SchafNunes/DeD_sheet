import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';   
import Characters from './Characters.js';
import Armors from './Armors.js';

const Character_Armors = sequelize.define('character_armors', {
    character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Characters,
            key: 'id'
        }
    },
    armor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Armors,
            key: 'id'
        }
    }
});

export default Character_Armors;