module.exports = (sequelize, dataTypes) => {

    const alias = "Genre";

    const cols = {
    id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull : false,
        autoIncrement: true,
    },
    name: {
        type: dataTypes.STRING(100),
        allowNull: false,
    },
    ranting: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true
    },
    active: {
        type: dataTypes.INTEGER(1), /* o tambien podria ser BOOLEAN */
        allowNull: false,
        defaultValue: "1",
    },
}
const config = {
    tableName: "genres",
    timesName: true,
    underscored: true
}


const Genre = sequelize.define(alias, cols, config);

return Genre;
}

