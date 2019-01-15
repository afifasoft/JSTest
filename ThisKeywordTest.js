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
    "itemPrice": "1200.00",
    "delivered": "Y"
  },
  "isFromState": function (Y) {
    return ( this.getItem.delivered === Y );
  }
}

var address = shop.getShopAddress();

var deliveryStatus = shop.isFromState("Y");
console.log("Delivery Status: "+ deliveryStatus);

var giftShop = shop;
shop = {};

console.log(giftShop.getShopAddress());

console.log(giftShop["getItem"]["itemPrice"]);
