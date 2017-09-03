module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    Title: DataTypes.STRING,
    Priority: DataTypes.STRING,
    createdBy: DataTypes.TEXT,
    assignedTo: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Card.hasMany(models.Task)
      }
    }
  });

  return Card;
};
