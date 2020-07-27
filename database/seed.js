const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const App = require('./index.js');

var names = ['Bob', 'Stacy', 'Jack', 'Milly', 'Drake', 'Howard', 'Gage', 'Kate', 'Paige', 'Kim', 'Eve', 'Ann', 'Sue', 'Grace', 'Grant', 'Chad', 'Todd', 'Luke', 'Max', 'Ross']
const randomName = names[Math.floor(Math.random() * names.length)];

var addData = function() {
  App.sync().then(() => {
    App.create({
      topScore: Math.round(Math.random() * (30 - 1) + 1),
      name: randomName,
      password: 'canada'
    });
  })
    .catch((error) => {
      console.log(error);
    });
};

//If i dont have these 4 add data functions, I get a Validation Error and the numbering is off, with these it works accurately, will attempt to fix later
addData();
addData();
addData();
addData();

var adder = function() {
  var counter = 0;
  while (counter < 96) {
    addData();
    counter++;
  }
};

adder();