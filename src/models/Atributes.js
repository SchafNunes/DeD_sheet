import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';


//id, strength, dexterity, constitution, intelligence, wisdom, charisma
const Atributes = sequelize.define('atributes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    strength: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    constitution: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    intelligence: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    charisma: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});



export default Atributes;