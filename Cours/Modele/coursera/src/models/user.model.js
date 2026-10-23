const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  // Surcharge de toJSON() pour retirer les champs sensibles avant d'envoyer la réponse
  toJSON() {
    const values = { ...this.get() };
    delete values.password;
    delete values.createdAt;
    delete values.updatedAt;
    return values;
  }

  // Méthode d’instance : vérifier si le mot de passe correspond
  async passwordMatches(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  }

  // Méthode statique : authentifier un utilisateur
  static async authenticate(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    const isMatch = await user.passwordMatches(password);
    return isMatch ? user : null;
  }
}

User.init({
  firstname: { type: DataTypes.STRING, allowNull: false },
  lastname:  { type: DataTypes.STRING, allowNull: false },
  email:     { type: DataTypes.STRING, allowNull: false, unique: true },
  password:  { type: DataTypes.STRING, allowNull: false },
  role:      { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  indexes: [
    { unique: true, fields: ['email'] }
  ],
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
});

module.exports = User;