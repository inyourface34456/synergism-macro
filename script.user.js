"use strict";
(() => {
  // src/coin.ts
  var coin1 = document.getElementById("buycoin1");
  function buyWorker() {
    if (coin1) {
      coin1.click();
    } else {
      console.log("Cannot find worker button");
    }
  }
  window.buyWorker = buyWorker;
})();
