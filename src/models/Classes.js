import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';

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

export default Classes;