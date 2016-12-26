(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('MyController', MyController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var Buy = this;
  Buy.buyitemslist = ShoppingListService.buyitems();
  Buy.ChangeToBought = ShoppingListService.buytobought;
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var Bought = this;
  Bought.boughtitemlist = ShoppingListService.boughtitems();
}

MyController.$inject = ['ShoppingListService'];
function MyController(ShoppingListService) {
  var ctrl = this;
  ctrl.additemname="";
  ctrl.additemquantity="";
  ctrl.additem = function () {
     ShoppingListService.additem(ctrl.additemname,ctrl.additemquantity);
     ctrl.additemname="";
     ctrl.additemquantity=""; 
  };
}

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var buy = [
      {
        name: "Dosa",
        quantity: 3
      },
      {
        name: "Idli",
        quantity: 5
      },
      {
        name: "Vada",
        quantity: 4
      },
      {
        name: "Poori",
        quantity: 6
      },
      {
        name: "Pav Bhaji",
        quantity: 3
      }
    ];
  var bought =[];
  service.buytobought = function (itemindex) {
    bought.push(buy[itemindex]);
    buy.splice(itemindex,1);
  };
  service.buyitems = function (itemindex) {
    return buy;
  };
  service.boughtitems = function () {
    return bought;
  };
  service.additem = function (iname,iquantity) {
    var itemadd = {
      name: iname,
      quantity:iquantity
    }
    buy.push(itemadd);
  };
}

})();
