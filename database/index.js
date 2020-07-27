const Sequelize = require('sequelize');
const postgresStuff = require('./config.js');

const sequelize = new Sequelize('MVP', postgresStuff.login, postgresStuff.password, {
  host: 'ec2-18-224-213-219.us-east-2.compute.amazonaws.com',
  dialect: 'postgres',
  define: {
  timestamps: false
}
});

const App = sequelize.define('Scores', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: false,
  },
  topScore: Sequelize.INTEGER,
  name: Sequelize.STRING,
  password: Sequelize.STRING
});
  
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  
  
module.exports = App;