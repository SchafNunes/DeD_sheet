import  { DataTypes } from 'sequelize';
import {sequelize} from '../config/index.js';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: true,
        /*

        ^
        |
        Muda esse allownull


        */
    },
    token: {
        type: DataTypes.CHAR
    },
    role: {
        type: DataTypes.CHAR,
        allowNull: false,
        defaultValue: 'user'
    }
})

export default User;