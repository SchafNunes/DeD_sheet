import { DataTypes } from "sequelize";
import { sequelize } from "../config/index.js";

//id, name, description, price, weight, armor_class, strength, stealth, equipament_type
const Armors = sequelize.define("armors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  weight: {
    type: DataTypes.FLOAT,
  },
  armor_class: {
    type: DataTypes.STRING,
  },
  strength: {
    type: DataTypes.STRING,
  },
  stealth: {
    type: DataTypes.STRING,
  },
  equipament_type: {
    type: DataTypes.STRING,
  },
});

export default Armors;
