import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';


const Class_Features = sequelize.define('class_features', {
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
        type: DataTypes.TEXT,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Class_Features;