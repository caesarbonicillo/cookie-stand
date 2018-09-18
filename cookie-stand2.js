'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var pike_location = {  
  // data
  min: 23, //this is min cust per hour
  max: 65, //this is max cust per hour
  avgCookieSales: 6.3, //avg cookie sales per hour

  getRandomIntInclusive (min, max) {
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max-min +1)) +min;
  }, 

  function cookiesSold(getRandomIntInclusive, avgCookieSales){
    return getRandomIntInclusive * avgCookieSales;
  }
  for (var i = 0; i <hours.legnth; i++)
    getRandomIntInclusive + 
};

//pat needs to be able to add and remove locations.
//