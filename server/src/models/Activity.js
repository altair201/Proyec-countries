const { DataTypes } = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            
        },
        dificult:{
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            },
            allowNull: false
        },
        duration:{
            type: DataTypes.STRING,
            
        },
        season:{
            type: DataTypes.STRING,
            
        },
        
    },
    { timestamps: false });
}