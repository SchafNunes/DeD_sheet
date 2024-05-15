import { DataTypes } from "sequelize";
import {sequelize} from '../config/index.js';
import User from './User.js';
    
//table id, users_id foreing_key, name, races_id foreingkey, classes.id foreingkey
const Characters = sequelize.define('characters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    races_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    classes_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Characters.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export default Characters;
