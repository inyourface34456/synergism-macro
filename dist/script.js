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
    coinBuyQuant: () => coinBuyQuant,
    setCoinBuyQuant: () => setCoinBuyQuant,
    toggleAutobuyAccel: () => toggleAutobuyAccel,
    toggleAutobuyAccelBoost: () => toggleAutobuyAccelBoost,
    toggleAutobuyAlchemies: () => toggleAutobuyAlchemies,
    toggleAutobuyCoinMint: () => toggleAutobuyCoinMint,
    toggleAutobuyInvestment: () => toggleAutobuyInvestment,
    toggleAutobuyMult: () => toggleAutobuyMult,
    toggleAutobuyPrinter: () => toggleAutobuyPrinter,
    toggleAutobuyWorker: () => toggleAutobuyWorker
  });

  // src/utils.ts
  function makeClicker(id, disId) {
    const element = document.getElementById(id);
    return function() {
      if (element) {
        element.click();
      } else {
        console.error(`cannot find the ${disId} button"`);
      }
    };
  }
  var coinBuyQuant = {
    one: "coinone",
    ten: "cointen",
    hundered: "coinhundred",
    onek: "cointhousand",
    tenk: "coin10k",
    hunderedk: "coin100k"
  };

  // src/coin.ts
  var buyWorker = makeClicker("buycoin1", "Worker");
  var buyInvestment = makeClicker("buycoin2", "Investment");
  var buyPrinter = makeClicker("buycoin3", "Printer");
  var buyCoinMint = makeClicker("buycoin4", "Coin Mint");
  var buyAlchemies = makeClicker("buycoin5", "Alchemy");
  var buyAccel = makeClicker("buyaccelerator", "Accelorator");
  var buyMult = makeClicker("buymultiplier", "Multplier");
  var buyAccelBoost = makeClicker("buyacceleratorboost", "Accel. Boost");
  var toggleAutobuyWorker = makeClicker("toggle1", "Auto Worker");
  var toggleAutobuyInvestment = makeClicker("toggle2", "Auto Investment");
  var toggleAutobuyPrinter = makeClicker("toggle3", "Auto Printer");
  var toggleAutobuyCoinMint = makeClicker("toggle4", "Auto Coin Mint");
  var toggleAutobuyAlchemies = makeClicker("toggle5", "Auto Alchemy");
  var toggleAutobuyAccel = makeClicker("toggle6", "Auto Accelorator");
  var toggleAutobuyMult = makeClicker("toggle7", "Auto Multplier");
  var toggleAutobuyAccelBoost = makeClicker("toggle8", "Auto Accel. Boost");
  function setCoinBuyQuant(quant) {
    switch (quant) {
      case "coinone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "cointen":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "coinhundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "cointhousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "coin10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "coin100k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      default:
        console.error("invalid input");
        return;
    }
  }
  return __toCommonJS(index_exports);
})();
