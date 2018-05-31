module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    createdBy: DataTypes.TEXT,
    assignedTo: DataTypes.TEXT,
    status: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Card.hasMany(models.Task)
      }
    }
  });

  return Card;
};
