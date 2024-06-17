import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';
import Class_Features from "./Class_Features.js";

const Classes = sequelize.define ('classes', {
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

Classes.hasMany(Class_Features, {foreignKey: 'class_id', source: 'id'});


export default Classes;