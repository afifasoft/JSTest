var shop = {
  "name": "MATALAN",
  "mobile": "0547463876",
  "address": "Burjuman Dubai",
  "getShopAddress": function () {
    return this.name + " " + this.mobile + " "+ this.address
  },
  "getItem": {
    "itemName": "Jacket",
    "itemCode": "JT10002",
    "itemPrice": "1200.00"
  },
  "status": function () {
    var isOpen = true;
    if(isOpen){
      return "Opened";
    } else {
      return "Closed";
    }
  }
}

var address = shop.getShopAddress();

var giftShop = shop;
shop = {};

console.log(giftShop.getShopAddress());
console.log(giftShop["status"]());
console.log(giftShop["getItem"]["itemPrice"]);
