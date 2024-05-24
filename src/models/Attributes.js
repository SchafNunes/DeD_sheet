import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';


//id, strength, dexterity, constitution, intelligence, wisdom, charisma
const Attributes = sequelize.define('attributes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    strength: {
        type: DataTypes.INTEGER
    },
    dexterity: {
        type: DataTypes.INTEGER
    },
    constitution: {
        type: DataTypes.INTEGER
    },
    intelligence: {
        type: DataTypes.INTEGER
    },
    wisdom: {
        type: DataTypes.INTEGER
    },
    charisma: {
        type: DataTypes.INTEGER
    }
});



export default Attributes;