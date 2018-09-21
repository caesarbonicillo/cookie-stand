'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var CookieStand = function (location, min, max, avg, hourlySales, total) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = hourlySales;
  this.total = total;
};

this.randomNum = function(){
  return Math.floor(Math.random()*(this.max - this.min +1) + this.min);
  //gives random number of customers based on min and max
},

this.avgNumCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    var valueSale = Math.floor (this.avg * this.randomNum());
    this.hourlySales.push(valueSale);
    this.total += valueSale;
  }//takes from randomNum and mulitplies it from avg cookies takes pushes it into hourlSales[] also adding hour sale to days total
},

this.render = function() {
  var element =document.getElementById('store1');
  var storeTitle = document.createElement('h3');
  storeTitle.textContent = this.name;
  element.appendChild(storeTitle);

  for (var i =0; i < hours.length; i++) {
    var element1 =document.getElementById('list1');
    var storeList = document.createElement('li');
    storeList.textContent = this.hourlySales[i];
    element1.appendChild(storeList); 
  }

  var element2 =document.getElementById('store1');
  var storeTotal = document.createElement('p');
  storeTotal.textContent = this.total;
  element2.appendChild(storeTotal);
};



var Pike = new CookieStand ('Pike', 23, 63, 6.3, [], 1);
var SeaTac = new CookieStand ('Seatac', 3, 24, 1.2, [], 1);
var SeattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7, [], 1);
var CapitalHill = new CookieStand ('CapitalHill', 20, 38, 2.3, [], 1);
var Alki = new CookieStand ('Alki', 2, 16, 4.6, [], 1);



console.log(Pike);
console.log(SeaTac);
console.log(SeattleCenter);
console.log(CapitalHill);
console.log(Alki);
