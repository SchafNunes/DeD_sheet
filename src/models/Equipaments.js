import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';

const Equipaments = sequelize.define('equipaments', {
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
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Equipaments;