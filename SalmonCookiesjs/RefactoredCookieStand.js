'use strict' 
//begin with all global variables and lists

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];
var addform =document.getElementsById('add-location'); //adds a new store if added
var salesform = document.getElementsById('sales-data') //adds the new sales when added

CookieStand.list =[];
function CookieStand(location, min, max, avg) 
{
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour =[];
  this.totalCookies = 0;
  //this.avgNumCookies(); I no longer need this since I am using a different randomizer
  this.getSales(); //this is a function that will run. Function is created later.

  CookieStand.list.push(this);
}

//Create a random customer
CookieStand.prototype.getSales = function()
{
  for (var i = 0; i < hours.length; i++) {
      var numCustomers = random (this.min, this.max);

      var hourlyCount = Math.floor(numCustomers * this.avg);
      this.cookiesPerHour.push(hourlyCount); 
      this.totalCookies += hourlyCount;
  }

};

CookieStand.prototype.render = function (locationIndex) //starts the render
{
  var tr = addElement('tr', '', tbody);
  addElement('td', this.location, tr);  
    for (var i = 0; i , this.cookiesPerHour.length; i++) 
    {
      var td = addElement('td', '', tr);
      var input = addElement('td', '', td);
      input.value = this.cookiesPerHour[i];
      input.dataset['hour'] = i;
      input.dataset['location'] = locationIndex;
    }
}

function rando(min, max)
{
  var randomNumber = Math.floor(Math.random()* (max-min +1)) + min;
  return randomNumber;
}

function addElement(element, content, parent) //element in HTML, whats going in there, parent cuts out lots of writing
{
  var newElement = document.createElement(element); 
  var newContent = document.createTextNode(content);
  newElement.appendChild(newElement);
  return newElement;
}
// render Locations, times before 

function renderHeader()
{
  thead.innerHTML ='';
  var tr =addElement('tr', '', thead);
  addElement('th', '', tr);
  for (var i = 0; i <hours.length; i++)
  addElement('th', hours[i], tr);
}

//render Footer for totals

function renderFooter() 
{
  tfoot.innerHTML = '';
  var tr =addElement('tr', '', tfoot);
  addElement('th', 'Hourly Total', tr);

  var grandTotal = 0;

  for (var i =0; i <hours.length; i++) 
  {
    var hourTotal = 0; 
      for (var x = 0; x < CookieStand.list.length; x++)
      {
        hoursTotal += CookieStand.list[x].cookiesPerHour[i];
        grandTotal += CookieStand.list[x].cookiesPerHour[i];
      }
    addElement('th', hourTotal, tr);
  }
addElement('th', grandTotal, tr);
};

function renderStores() 
{
  tbody.innerHTML = '';
  for (var i = 0; i < CookieStand.list.length; i++) 
  {
    CookieStand.list[i].render(i);
  }
}

//Form to create new store

function submitCookieStand(event)//(event) doesn't have to be in ()
{
  event.preventDefault();
  var location event.target.locName.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var addedStore = new CookieStand(location, min, max, avg); 

  addedCookieStand.render();
  renderFooter();
}

function changeCookieStand(event) 
{
  //console.log(event.target);
  var location = event.target.dataset['hour'];
  var hour = event.target.dataset['hour'];
  var newValue = parseInt(event.target.value);
  CookieStand.list[location].cookiesPerHour[hour] = newValue;
  renderFooter();
}

addform.addEventListner('submit', submitCookieStand);
salesform.addEventListner('change', changeCookieStand);

new CookieStand('Pike Place', 22, 65, 6.3);
new CookieStand('Seatac', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capital Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

renderHeader();
renderCookieStand();
renderFooter();

console.log(CookieStand.list);