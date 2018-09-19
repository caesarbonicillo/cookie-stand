'use strict';

var CookieStand = function (location, min, max, avg,) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customersCookies= customerCookies
  this.hourlySales = [];
  this.total = 0;

  CookieStand.list.push(this.customersCookies[]);//built inside constructor has just pushed CookieStand into the list Array
  CookieStand.list.push(this);//when create a new object push 
  };
  
  CookieStand.list = [];
  var customersCookies = [];
  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  
CookieStand.prototype.randomNum = function(){
  return Math.floor(Math.random()*(this.max - this.min +1) + this.min);
  //gives random number of customers based on min and max
};
CookieStand.prototype.customers = function() {
  for(var i = 0; i , hours.length; i++){
    var customersCookies = Math.floor (this.avg * this.randomNum());
    this.hourlySales.push(customersCookies);
    this.total +=customersCookies;
  }
}
CookieStand.prototype.avgNumCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    var valueSale = Math.floor (this.avg * this.randomNum());
    this.hourlySales.push(valueSale);
    this.total += valueSale;
  }//takes from randomNum and mulitplies it from avg cookies takes pushes it into hourlySales[] also adding hour sale to days total
};
CookieStand.prototype.render = function() {
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

  var Pike = new CookieStand ('Pike', 23, 63, 6.3);
  var SeaTac = new CookieStand ('Seatac', 3, 24, 1.2,);
  var SeattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7);
  var CapitalHill = new CookieStand ('CapitalHill', 20, 38, 2.3);
  var Alki = new CookieStand ('Alki', 2, 16, 4.6);

console.log(CookieStand.list);
