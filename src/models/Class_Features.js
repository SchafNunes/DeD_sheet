import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';

//table id, name, description

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
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Class_Features;