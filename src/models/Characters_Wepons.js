import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';
import Characters from './Characters.js';
import Wepons from './Wepons.js';


//table of relation between characters and wepons

const Characters_Wepons = sequelize.define('characters_wepons', {
    character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Characters,
            key: 'id'
        }
    },
    wepon_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Wepons,
            key: 'id'
        }
    }
});

export default Characters_Wepons;