var srvc = require('./service');
var user = require('./user');
var SECRETS = require('./secrets');
function putName(req,res,next){
  res.status(200).send(user.name = req.body.name);
};
function putLocation(req,res,next){
  res.status(200).send(user.location = req.body.location);
};
function postHobbies(req,res,next){
  if(req.body.name && req.body.type){
    user.hobbies.push(req.body);
    res.status(200).send(user.hobbies);
  }else{
    res.status(400).send('incorrect format');
  }
};
function postOccupations(req,res,next){
  if(req.body.occupations){
    user.occupations.push(req.body.occupations);
    res.status(200).send(user.occupations);
  }else{
    res.status(400).send('incorrect format');
  }
};
function getName(req,res,next){
  res.status(200).send(user.name);
};
function getLocation(req,res,next){
  res.status(200).send(user.location);
};
function getOccupations(req,res,next){
  if(req.query.order === 'asc' || req.query.order === 'desc'){
    res.status(200).send(srvc.sortArray(user.occupations,'',req.query.order));
  }
  res.status(200).send(user.occupations);
};
function getOccupationsLatest(req,res,next){
  res.status(200).send(user.occupations[(user.occupations.length-1)]);
};
function getHobbies(req, res, next){
  if(req.query.order === 'asc' || req.query.order === 'desc'){
    res.status(200).send(srvc.sortArray(user.hobbies,'name',req.query.order));
  }
  res.status(200).send(user.hobbies);
};
function getHobbiesType(req, res, next){
  var arrTypeHobbies = [];
  for(var i = 0; i < user.hobbies.length; i++){
    if(user.hobbies[i].type === req.params.type){
        arrTypeHobbies.push(user.hobbies[i]);
    }
  }
  if(arrTypeHobbies[0]){
    res.status(200).send(arrTypeHobbies);
  }else{
    res.status(400).send('no '+req.params.type+' hobbies');
  }
};
function getFamily (req,res,next){
  if(req.query.order === 'asc' || req.query.order === 'desc'){
    res.status(200).send(srvc.sortArray(user.family,'name',req.query.order));
  }
  res.status(200).send(user.family);
};
function getFamilyGender(req,res,next){
  var genderArr = [];
  for(var i = 0; i < user.family.length; i++){
    if(user.family[i].gender === req.params.gender){
      genderArr.push(user.family[i]);
    }
  }
  if(genderArr[0]){
    res.status(200).send(genderArr);
  }else{
    res.status(400).send('no '+req.params.gender+' in family');
  }
}
function getRestaurants(req,res,next){
  if(req.query.rating == 'gt:2'){
    res.status(200).send(user.restaurants.filter(function(a){return a.rating > 2;}));
  }
  if(req.query.order === 'asc' || req.query.order === 'desc'){
    res.status(200).send(srvc.sortArray(user.restaurants,'name',req.query.order));
  }else{
    res.status(200).send(user.restaurants);
  }
}
function getRestaurantsName(req,res,next){
  // console.log(req.params.name);
  for (var i = 0; i < user.restaurants.length; i++) {
    if(user.restaurants[i].name === req.params.name.replace(/\+/gi, ' ')){
      res.status(200).send(user.restaurants[i]);
    }
  }
}
function postFamily(req,res,next){
  if(req.body.name && req.body.gender && req.body.relation){
    user.family.push(req.body);
    res.status(200).send(user.family);
  }else{
    res.status(400).send('incorrect format');
  }
};
function postRestaurants(req,res,next){
  if(req.body.name && req.body.type && req.body.rating){
    user.restaurants.push(req.body);
    res.status(200).send(user.restaurants);
  }else{
    res.status(400).send('incorrect format');
  }
};
function getSkills(req,res,next){
  if (req.query.experience) {
    res.status(200).send(user.skills.filter(function(a){return a.experience === req.query.experience}));
  }else{
    res.status(400).send('incorrect format');
  }
  res.status(200).send(user.skills);
};
function postSkills(req,res,next){
  if(req.body.name && req.body.experience){
    req.body.id = req.count;
    user.skills.push(req.body);
    res.status(200).send(user.skills);
  }else{
    res.status(400).send('incorrect format');
  }
};
function getSECRETS(req,res,next){
  if((req.params.userName && req.params.pin)&&((req.params.userName === SECRETS.userName) && (req.params.pin === SECRETS.pin))){
    res.status(200).send(SECRETS.skill);
  }else{
    res.status(400).send('NO SECRETS FOR YOU\!');
  }
};
module.exports = {
  getName: getName,
  getLocation: getLocation,
  getOccupations: getOccupations,
  getOccupationsLatest: getOccupationsLatest,
  getHobbies: getHobbies,
  getHobbiesType: getHobbiesType,
  getFamily: getFamily,
  getFamilyGender: getFamilyGender,
  getRestaurants: getRestaurants,
  getRestaurantsName: getRestaurantsName,
  putName: putName,
  putLocation: putLocation,
  postHobbies: postHobbies,
  postOccupations: postOccupations,
  postFamily: postFamily,
  postRestaurants: postRestaurants,
  getSkills: getSkills,
  postSkills: postSkills,
  getSECRETS: getSECRETS
};
// console.log(user.occupations);
