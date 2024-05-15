import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';
import Characters from "./Characters.js";

//table id, name, description
const Races = sequelize.define ('races', {
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

export default Races;
    