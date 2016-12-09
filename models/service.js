//------------------------------------------------------sorts------------------------------------------------------
function sortArray (arr,prop,order){
  if(order === 'asc' && prop){
    return arr.sort(function(a,b){return a[prop] > b[prop]})
  }else if(order === 'desc' && prop){
    return arr.sort(function(a,b){return a[prop] > b[prop]}).reverse();
  }else if (order === 'asc'){
    return arr.sort(function(a,b){return a > b});
  }else if (order === 'desc'){
    return arr.sort(function(a,b){return a < b});
  }
}
//End Sort
module.exports = {
  sortArray: sortArray
};
