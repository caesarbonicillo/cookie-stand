'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

CookieStand.list = [];

function CookieStand(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg; //avg cookie
  this.customersCookies= [];
  this.hourlySales = []; //number of Cookies sold
  this.total = 0; //amount of total cookies

  //CookieStand.list.push(this.customersCookies[]);//built inside constructor has just pushed CookieStand into the list Array
  CookieStand.list.push(this);//when create a new object push

}

CookieStand.prototype.randomNumCustomer = function(){
  return Math.floor(Math.random()*(this.max - this.min +1) + this.min);
  //gives random number of customers based on min and max
};
// CookieStand.prototype.customers = function() {
//   for(var i = 0; i , hours.length; i++){
//     var customersCookies = Math.floor (this.avg * this.randomNumCustomer());
//     this.hourlySales.push(customersCookies);
//     this.total +=customersCookies;
//   }
// };
CookieStand.prototype.avgNumCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookiesSold = Math.floor (this.avg * this.randomNumCustomer());
    this.hourlySales.push(cookiesSold);
    this.total += cookiesSold;

  }//takes from randomNum and mulitplies it from avg cookies takes pushes it into hourlySales[] also adding hour sale to days total
};
//Starts my render.

CookieStand.prototype.render = function() {
  var table1 = document.getElementById('table');
  var tableRow = document.createElement('tr'); //created tr in HTML
  var tableTD = document.createElement('td'); //created TD
  tableTD.textContent = this.location; //added the location name to the TD
  tableRow.appendChild(tableTD); //added td to the actual HTML

  for (var i = 0; i < hours.length; i++) { //ran 4 loop to create and give data
    var newTD = document.createElement('td');// create td for Data
    newTD.textContent = this.hourlySales; // text.Content adds the information
    newTD.appendChild(tableRow); // //adds new TD with Data to table }
  };
  table1.appendChild(tableRow);

// CookieStand.prototype.render = function() {
  //   var element =document.getElementById('table');
  //   var storeTitle = document.createElement('h3');
  //   storeTitle.textContent = this.location;
  //   element.appendChild(storeTitle);
  
  //   for (var i =0; i < hours.length; i++) {
    //     var element1 =document.getElementById('list1');
    //     var storeList = document.createElement('li');
    //     storeList.textContent = this.hourlySales[i];
    //     element1.appendChild(storeList);
    //   }
    
    //   var element2 =document.getElementById('table');
    //   var storeTotal = document.createElement('p');
    //   storeTotal.textContent = this.total;
    //   element2.appendChild(storeTotal);
    
    var Pike = new CookieStand ('Pike', 23, 63, 6.3);
    var SeaTac = new CookieStand ('Seatac', 3, 24, 1.2);
    var SeattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7);
    var CapitalHill = new CookieStand ('CapitalHill', 20, 38, 2.3);
    var Alki = new CookieStand ('Alki', 2, 16, 4.6);
    Pike.render();
    console.log(CookieStand.list);
    // //function renderTableHeadHead
    