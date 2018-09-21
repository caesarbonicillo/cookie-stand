'use strict';

CookieStand.list = [];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookieStoreForm = document.getElementById("cookieStoreForm");

function CookieStand(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg; //avg cookie
  this.customersCookies= []; //ignore this 
  this.hourlySales = []; //number of Cookies sold
  this.total = 0; //amount of total cookies
  this.avgNumCookies();
  //CookieStand.list.push(this.customersCookies[]);//built inside constructor has just pushed CookieStand into the list Array
  CookieStand.list.push(this);//when create a new object push

}
CookieStand.prototype.randomNumCustomer = function(){
  return Math.floor(Math.random()*(this.max - this.min +1) + this.min);
  //gives random number of customers based on min and max
};
CookieStand.prototype.avgNumCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookiesSold = Math.floor (this.avg * this.randomNumCustomer());
    this.hourlySales.push(cookiesSold);
    this.total += cookiesSold;

  }//takes from randomNum and mulitplies it from avg cookies takes pushes it into hourlySales[] also adding hour sale to days total
};
//Starts my render.

function render() 
{ //calling render to CookieStand Construct
  var table1 = document.getElementById('table'); // referring to 'id= table' in HTML
  //var tableRow = document.createElement('tr'); //created tr in HTML is under <table>
  //var tableTD = document.createElement('td'); //created TD in HTML is under <tr>
  //tableTD.textContent = this.location; //added the location name to the TD <still> 
  //tableRow.appendChild(tableTD); //added td to the actual HTML
  
  var tableRowHours = document.createElement('tr');
  table1.appendChild(tableRowHours);
  var tableSpacer = document.createElement('td');
  tableRowHours.appendChild(tableSpacer); //adds a space in front of Row

  for (var i = 0; i < hours.length; i++) 
  {
    var tableDataHours = document.createElement('td');
    tableRowHours.appendChild(tableDataHours);
    tableDataHours.textContent = hours[i]; 
  }

  for (var j = 0; j < CookieStand.list.length; j++) 
  { var tableRow = document.createElement('tr'); //created tr in HTML is under <table>
    var tableTD = document.createElement('td'); //created TD in HTML is under <tr>
    tableRow.appendChild(tableTD); //added td to the actual HTML
    tableTD.textContent =CookieStand.list[j].location; //added the location name to the TD <still> 
    table1.appendChild(tableRow);
    
    for (var i = 0; i < hours.length; i++) { //ran 4 loop to create and give data which is as long as "hours"
      var newTD = document.createElement('td');// create td for Data
      newTD.textContent = CookieStand.list[j].hourlySales[i]; // text.Content adds the information
      tableRow.appendChild(newTD); // //adds new TD with Data to table
      console.log(57);
    }
  }
  table1.appendChild(tableRow);
  
};
// CookieStand.prototype.render = function() {
//   var element =document.getElementById('table');
//   var storeTitle = document.createElement('tr');
//   storeTitle.textContent = this.location;
//   element.appendChild(storeTitle);
  
//   for (var i =0; i < hours.length; i++) {
//     var element1 = document.getElementById('table');
//     var storeList = document.createElement('td');
//     storeList.textContent = this.hourlySales[i];
//     element1.appendChild(CookieStand);
//   }
    
//   var element2 =document.getElementById('table'); \\ got ID table
//   var storeTotal = document.createElement('td'); \\ created a <p>
//   storeTotal.textContent = this.total; added this.total to store total
//   element2.appendChild(storeTotal); \\ element2 appendchild adds storetotal to the table
    
var Pike = new CookieStand ('Pike', 23, 63, 6.3);
var SeaTac = new CookieStand ('Seatac', 3, 24, 1.2);
var SeattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7);
var CapitalHill = new CookieStand ('CapitalHill', 20, 38, 2.3);
var Alki = new CookieStand ('Alki', 2, 16, 4.6);

//personTable.innerHTML = '';

function addNewStore(event){
  event.preventDefault();

  console.log(event.target.firstName.value);
var newStore = (i);
}
cookieStoreForm.addEventListener('submit', addNewStore)


addNewStore();
render();   
