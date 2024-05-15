import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';

//table id, name, description, price, damage, weight, properties
const Wepons = sequelize.define ('wepons', {
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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    damage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    properties: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Wepons;