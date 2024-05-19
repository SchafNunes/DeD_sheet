import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';
import Class_Features from "./Class_Features.js";

//table id, name, description
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

//relation with Class_features
Classes.hasMany(Class_Features, {foreignKey: 'class_id', source: 'id'});


export default Classes;