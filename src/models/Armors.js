import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';

//id, name, description, price, weight, armor_class, strength, stealth, equipament_type
const Armors = sequelize.define('armors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    armor_class: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    strength: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stealth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equipament_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Armors;