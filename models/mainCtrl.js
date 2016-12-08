var user = require('./user');
function getName(req,res,next){
  res.status(200).send(user.name);
};
function getLocation(req,res,next){
  res.status(200).send(user.location);
};
function getOccupations(req,res,next){
  res.status(200).send(user.occupations);
};
function getOccupationsLatest(req,res,next){
  res.status(200).send(user.occupations[(user.occupations.length-1)]);
};
function getHobbies(req, res, next){
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
  var restaurantsArr = [];
  if(req.query.rating == 'gt:2'){
    for (var i = 0; i < user.restaurants.length; i++) {
      if(user.restaurants[i].rating > 2){
        restaurantsArr.push(user.restaurants[i]);
      }
    }
    res.status(200).send(restaurantsArr);
  }

  res.status(200).send(user.restaurants);
}

function getRestaurantsName(req,res,next){
  console.log(req.params.name);
  for (var i = 0; i < user.restaurants.length; i++) {
    if(user.restaurants[i].name === req.params.name.replace(/\+/gi, ' ')){
      res.status(200).send(user.restaurants[i]);
    }
  }
}
// var genderArr = [];
// for(var i = 0; i < user.family.length; i++){
//   if(user.family[i].gender === 'male'){
//     genderArr.push(user.family[i]);
//   }
// }
// console.log(genderArr);
// var arrTest = user.restaurants.filter(function(a){
//   return a.rating > 2;
// });
// console.log(arrTest);
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
  getRestaurantsName: getRestaurantsName
};
// console.log(user.occupations);
