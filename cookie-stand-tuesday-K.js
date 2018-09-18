'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeL = {
  // data
  name: 'pike', //must be same as in HTML name.
  min: 23, //this is min cust per hour
  max: 65, //this is max cust per hour
  avg: 6.3, //avg cookie sales per hour
  hourlySales: [],// from open to close
  total: 0,
  // value inside object

  randomNum: function(){
    return Math.floor(Math.random()*(this.max - this.min +1) + this.min);
    //gives random number of customers based on min and max
  },

  avgNumCookies: function() {
    for(var i = 0; i < hours.length; i++) {
      var valueSale = Math.floor (this.avg * this.randomNum())
      this.hourlySales.push(valueSale);
      this.total += valueSale;
    }//takes from randomNum and mulitplies it from avg cookies takes pushes it into hourlSales[] also adding hour sale to days total
  },

  render: function() {
    var element =document.getElementById('store1');
    var storeTitle = document.createElement('h3');
    storeTitle.textContent = pikeL.name;
    element.appendChild(storeTitle);

    for (var i =0; i < hours.length; i++) {
      var element =document.getElementById('list1');
      var storeList = document.createElement('li');
      storeList.textContent = this.hourlySales[i];
      element.appendChild(storeList); 
    }

    var element =document.getElementById('store1');
    var storeTotal = document.createElement('p');
    storeTotal.textContent = pikeL.total;
    element.appendChild(storeTotal);
  }


};

pikeL.randomNum();
pikeL.avgNumCookies();
pikeL.render();
//pikeL.hourlyCookieSales();


console.log('hello');
