import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Charater = sequelize.define("Charater", {
    name: { type: DataTypes.STRING, allowNull: false },
    ki: { type: DataTypes.INTEGER, allowNull: false },
    race: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING}
})

export default Charater
