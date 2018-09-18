'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike_location = {  
  // data
  min: 23, //this is min cust per hour
  max: 65, //this is max cust per hour
  avgCookieSales: 6.3, //avg cookie sales per hour
  dailyTotal: [],// from open to close
  cookieSales:[], // 15 times
  // methods

  getRandomCustomer: function(min, max) {
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getTotalCookiesPurchasedPerHour: function() {
    return this.getRandomCustomer * this.avgCookieSales;
  },

  calculateCookiesPurchased: function() {
    
  },
    for (var i = 0; i < hours.length; i++) {
      // get a random of customers
      var randomCustomers = this.getRandomCustomers;//this is just for one hour
      // get the total cookies purchased for the hour
      var totalCookiesPerHour = this.getTotalCookiesPurchasedPerHour(randomCustomers);
      // push the hour and total cookies purchased into a map
      var hour = hours[i];
      // example {"6am": 144.9}
      hourToCookiesMap[hour]= totalCookiesPerHour;
//     }
//     //return map
//     return hourToCookiesMap;
//   }
// };

// pike_location.calculateCookiesPurchased();





// // var seatac= {
// //   min: 3,
//   max: 24,
//   avg: 1.2,

// var seattleCenter= {
//   minCustomers:
//   maxCustomers:
//   avgCookieSale:
// };

// var capitalHill= {
//   minCustomers:
//   maxCustomers:
//   avgCookieSale:
// };

// var alki= {
//   minCustomers:
//   maxCustomers:
//   avgCookieSal:
// };