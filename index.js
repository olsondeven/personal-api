var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var mainCtrl = require('./models/mainCtrl.js');
var middleware = require('./models/middleware.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type',mainCtrl.getHobbiesType);
app.get('/family',mainCtrl.getFamily);
app.get('/family/:gender',mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name',mainCtrl.getRestaurantsName);
app.put('/name',mainCtrl.putName);
app.put('/location',mainCtrl.putLocation);
app.post('/hobbies',mainCtrl.postHobbies);
app.post('/occupations',mainCtrl.postOccupations);
app.post('/restaurants',mainCtrl.postRestaurants);
app.post('/family',mainCtrl.postFamily);
app.get('/skills',mainCtrl.getSkills);
app.post('/skills',middleware.generateId,mainCtrl.postSkills);
// console.log(mainCtrl.getHobbies);

//  /restaurants/Papa+Johns

app.listen(config.port,function(){
  console.log('listening to ',config.port);
});
