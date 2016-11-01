module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Card", {
    Title:DataTypes.STRING,
    Priority:DataTypes.STRING,
    Status:DataTypes.STRING,
    Createdby:DataTypes.STRING,
    Assignedto:DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return User;
};