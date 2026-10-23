const sequelize = require('../config/sequelize');
const Course = require('../models/course.model');
const User = require('../models/user.model');
const { DataTypes } = require('sequelize');

// Assure-toi d'avoir tes données de test ici (ou importées)
const data = [
  { title: 'Découverte de Express', nbChapters: 5, done: true },
  { title: 'PostgreSQL et Sequelize', nbChapters: 8, done: false }
];

(async () => {
  try {
    await sequelize.authenticate();

    // S'assure que la colonne userId existe
    const qi = sequelize.getQueryInterface();
    const desc = await qi.describeTable('courses');
    if (!desc.userId) {
      await qi.addColumn('courses', 'userId', {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      await qi.addIndex('courses', ['userId'], { name: 'idx_courses_userId' });
    }

    await sequelize.transaction(async (t) => {
      // Purge des tables avec cascade et réinitialisation des IDs
      await Course.destroy({ where: {}, truncate: true, restartIdentity: true, cascade: true, transaction: t });
      await User.destroy({ where: {}, truncate: true, restartIdentity: true, cascade: true, transaction: t });

      // User seed (John Doe admin)
      const user = await User.create({
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        password: 'qwerty123',
        role: 'admin'
      }, { transaction: t });

      // Cours rattachés à cet utilisateur
      const coursesWithUser = data.map(course => ({ ...course, userId: user.id }));
      const res = await Course.bulkCreate(coursesWithUser, { returning: true, transaction: t });
      const count = await Course.count({ transaction: t });

      console.log(`✅ ${res.length} cours insérés • Total en base: ${count}`);
    });

    await sequelize.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    try { await sequelize.close(); } catch {}
    process.exit(1);
  }
})();