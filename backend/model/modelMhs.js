import { Sequelize  } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Mahasiswa = db.define('mahasiswa',{
    npm: { type:DataTypes.STRING },
    nama: { type:DataTypes.STRING },
    kelas: { type:DataTypes.STRING },
    uts: { type:DataTypes.INTEGER },
    uas: { type:DataTypes.INTEGER },
    ipk: { type:DataTypes.STRING },
    grade: { type:DataTypes.STRING }
},{
    freezeTableName:true
});

export default Mahasiswa;
