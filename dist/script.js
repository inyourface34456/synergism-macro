"use strict";
var macroCmds = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    buyAccel: () => buyAccel,
    buyAccelBoost: () => buyAccelBoost,
    buyAlchemies: () => buyAlchemies,
    buyCoinMint: () => buyCoinMint,
    buyInvestment: () => buyInvestment,
    buyMult: () => buyMult,
    buyPrinter: () => buyPrinter,
    buyWorker: () => buyWorker,
    toggleAutobuyAccel: () => toggleAutobuyAccel,
    toggleAutobuyAccelBoost: () => toggleAutobuyAccelBoost,
    toggleAutobuyAlchemies: () => toggleAutobuyAlchemies,
    toggleAutobuyCoinMint: () => toggleAutobuyCoinMint,
    toggleAutobuyInvestment: () => toggleAutobuyInvestment,
    toggleAutobuyMult: () => toggleAutobuyMult,
    toggleAutobuyPrinter: () => toggleAutobuyPrinter,
    toggleAutobuyWorker: () => toggleAutobuyWorker
  });

  // src/coin.ts
  var coin1 = document.getElementById("buycoin1");
  var coin2 = document.getElementById("buycoin2");
  var coin3 = document.getElementById("buycoin3");
  var coin4 = document.getElementById("buycoin4");
  var coin5 = document.getElementById("buycoin5");
  var accelerator = document.getElementById("buyaccelerator");
  var mult = document.getElementById("buymultiplier");
  var boost = document.getElementById("buyacceleratorboost");
  var coin1autobuy = document.getElementById("toggle1");
  var coin2autobuy = document.getElementById("toggle2");
  var coin3autobuy = document.getElementById("toggle3");
  var coin4autobuy = document.getElementById("toggle4");
  var coin5autobuy = document.getElementById("toggle5");
  var accelautobuy = document.getElementById("toggle3");
  var multautobuy = document.getElementById("toggle4");
  var acelboostautobuy = document.getElementById("toggle5");
  function buyWorker() {
    if (coin1) {
      coin1.click();
    } else {
      console.error("Cannot find worker button");
    }
  }
  function buyInvestment() {
    if (coin2) {
      coin2.click();
    } else {
      console.error("Cannot find investment button");
    }
  }
  function buyPrinter() {
    if (coin3) {
      coin3.click();
    } else {
      console.error("Cannot find printer button");
    }
  }
  function buyCoinMint() {
    if (coin4) {
      coin4.click();
    } else {
      console.error("Cannot find coin mint button");
    }
  }
  function buyAlchemies() {
    if (coin5) {
      coin5.click();
    } else {
      console.error("Cannot find alchemies button");
    }
  }
  function buyAccel() {
    if (accelerator) {
      accelerator.click();
    } else {
      console.error("Cannot find acclerator button");
    }
  }
  function buyMult() {
    if (mult) {
      mult.click();
    } else {
      console.error("Cannot find mult button");
    }
  }
  function buyAccelBoost() {
    if (boost) {
      boost.click();
    } else {
      console.error("Cannot find accel. boost button");
    }
  }
  function toggleAutobuyWorker() {
    if (coin1autobuy) {
      coin1autobuy.click();
    } else {
      console.error("Cannot find auto worker button");
    }
  }
  function toggleAutobuyInvestment() {
    if (coin2autobuy) {
      coin2autobuy.click();
    } else {
      console.error("Cannot find auto investment button");
    }
  }
  function toggleAutobuyPrinter() {
    if (coin3autobuy) {
      coin3autobuy.click();
    } else {
      console.error("Cannot find auto printer button");
    }
  }
  function toggleAutobuyCoinMint() {
    if (coin4autobuy) {
      coin4autobuy.click();
    } else {
      console.error("Cannot find auto coin mint button");
    }
  }
  function toggleAutobuyAlchemies() {
    if (coin5autobuy) {
      coin5autobuy.click();
    } else {
      console.error("Cannot find auto alchemies button");
    }
  }
  function toggleAutobuyAccel() {
    if (accelautobuy) {
      accelautobuy.click();
    } else {
      console.error("Cannot find auto printer button");
    }
  }
  function toggleAutobuyMult() {
    if (multautobuy) {
      multautobuy.click();
    } else {
      console.error("Cannot find auto coin mint button");
    }
  }
  function toggleAutobuyAccelBoost() {
    if (acelboostautobuy) {
      acelboostautobuy.click();
    } else {
      console.error("Cannot find auto alchemies button");
    }
  }
  return __toCommonJS(index_exports);
})();
