module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    preffered_posts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      onDelete: "cascade",
    });
    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });

    
  };
  return Users;
};
