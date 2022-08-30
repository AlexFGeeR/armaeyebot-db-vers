const sequelize = require('./init');
const {DataTypes} = require("sequelize");

const Alliance = sequelize.define('Alliance', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    PlayersCount: {
        type: DataTypes.INTEGER,
        set(value) {
            this.setDataValue('PlayersCount', value);
        }
    },
    Base: {
        type: DataTypes.INTEGER,
        set(value) {
            this.setDataValue('Base', value);
        }
    },
    OnlineWindow: {
        type: DataTypes.STRING,
        set(value) {
            this.setDataValue('OnlineWindow', value);
        }
    }
})

const Players = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    bId: {
        type: DataTypes.INTEGER,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
    AllianceId: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    Humanity: {
        type: DataTypes.INTEGER,
        set(value) {
            this.setDataValue('Humanity', value);
        }
    },
    AvgOnline: {
        type: DataTypes.INTEGER,
        set(value) {
            this.setDataValue('AvgOnline', value);
        }
    },
    connectionTime: {
        type: DataTypes.DATE,
        set(value) {
            this.setDataValue('connectionTime', value);
        }
    },
    disconnectTime: {
        type: DataTypes.DATE,
        set(value) {
            this.setDataValue('disconnectTime', value);
        }
    },
    OnlineWindow: {
        type: DataTypes.INTEGER
    }
})

Alliance.hasMany(Players, {
    foreignKey: 'AllianceId'
});
Players.belongsTo(Alliance);

module.exports = { Alliance, Players }