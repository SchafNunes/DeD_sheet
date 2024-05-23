import { DataTypes } from "sequelize";
import { sequelize } from "../config/index.js";

//table id, name, description, price, damage, weight, properties
const Weapons = sequelize.define("weapons", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  damage: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.FLOAT,
  },
  properties: {
    type: DataTypes.STRING,
  },
});

export default Weapons;
