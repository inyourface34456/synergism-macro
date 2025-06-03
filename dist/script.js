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
    buyCoalPlant: () => buyCoalPlant,
    buyCoalRig: () => buyCoalRig,
    buyCoinMint: () => buyCoinMint,
    buyDiamondUpgrade1: () => buyDiamondUpgrade1,
    buyDiamondUpgrade2: () => buyDiamondUpgrade2,
    buyDiamondUpgrade3: () => buyDiamondUpgrade3,
    buyDiamondUpgrade4: () => buyDiamondUpgrade4,
    buyDiamondUpgrade5: () => buyDiamondUpgrade5,
    buyInvestment: () => buyInvestment,
    buyMult: () => buyMult,
    buyPandorasBox: () => buyPandorasBox,
    buyPikaxe: () => buyPikaxe,
    buyPrinter: () => buyPrinter,
    buyRefinery: () => buyRefinery,
    buyWorker: () => buyWorker,
    coinBuyQuant: () => coinBuyQuant,
    diamondBuyQuant: () => diamondBuyQuant,
    getAutoPrestigeMode: () => getAutoPrestigeMode,
    isAccelBoostBuyable: () => isAccelBoostBuyable,
    isAccelBuyable: () => isAccelBuyable,
    isAlchemiesBuyable: () => isAlchemiesBuyable,
    isAutoPrestigeEnabled: () => isAutoPrestigeEnabled,
    isCoalPlantBuyable: () => isCoalPlantBuyable,
    isCoalRigBuyable: () => isCoalRigBuyable,
    isCoinMintBuyable: () => isCoinMintBuyable,
    isInvestmentBuyable: () => isInvestmentBuyable,
    isMultBuyable: () => isMultBuyable,
    isPandorasBoxBuyable: () => isPandorasBoxBuyable,
    isPikaxeBuyable: () => isPikaxeBuyable,
    isPrinterBuyable: () => isPrinterBuyable,
    isRefineryBuyable: () => isRefineryBuyable,
    isWorkerBuyable: () => isWorkerBuyable,
    setAutoPrestige: () => setAutoPrestige,
    setCoinBuyQuant: () => setCoinBuyQuant,
    setDiamondBuyQuant: () => setDiamondBuyQuant,
    toggleAutoPrestige: () => toggleAutoPrestige,
    toggleAutoPrestigeMode: () => toggleAutoPrestigeMode,
    toggleAutobuyAccel: () => toggleAutobuyAccel,
    toggleAutobuyAccelBoost: () => toggleAutobuyAccelBoost,
    toggleAutobuyAlchemies: () => toggleAutobuyAlchemies,
    toggleAutobuyCoalPlant: () => toggleAutobuyCoalPlant,
    toggleAutobuyCoalRig: () => toggleAutobuyCoalRig,
    toggleAutobuyCoinMint: () => toggleAutobuyCoinMint,
    toggleAutobuyInvestment: () => toggleAutobuyInvestment,
    toggleAutobuyMult: () => toggleAutobuyMult,
    toggleAutobuyPandoraBox: () => toggleAutobuyPandoraBox,
    toggleAutobuyPickaxe: () => toggleAutobuyPickaxe,
    toggleAutobuyPrinter: () => toggleAutobuyPrinter,
    toggleAutobuyRefinery: () => toggleAutobuyRefinery,
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
  function checkClassList(id, className) {
    let element = document.getElementById(id);
    if (!element) {
      console.error(`cannot find the element ${id}`);
      return 0;
    } else if (element && element.classList.contains(className)) {
      return true;
    } else {
      return false;
    }
  }
  function makeCheckIfAvalible(id) {
    return function() {
      let res = checkClassList(id, "buildingPurchaseBtnAvailable");
      if (res === 0) {
        return 0;
      } else if (res) {
        return true;
      } else {
        return false;
      }
    };
  }
  function makeSetAuto(id, disId) {
    return function(num) {
      let elm = document.getElementById(id);
      if (elm) {
        elm.value = num;
      } else {
        console.error(`cannot find ${disId}`);
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
  var diamondBuyQuant = {
    one: "crystalone",
    ten: "crystalten",
    hundered: "crystalhundred",
    onek: "crystalthousand",
    tenk: "crystal10k",
    hunderedk: "crystal100k"
  };

  // src/buildings/coin.ts
  var workerId = "buycoin1";
  var investmentId = "buycoin2";
  var printerId = "buycoin3";
  var coinMintId = "buycoin4";
  var alchemiesId = "buycoin5";
  var accelId = "buyaccelerator";
  var multId = "buymultiplier";
  var accelBoostId = "buyacceleratorboost";
  var buyWorker = makeClicker(workerId, "Worker");
  var buyInvestment = makeClicker(investmentId, "Investment");
  var buyPrinter = makeClicker(printerId, "Printer");
  var buyCoinMint = makeClicker(coinMintId, "Coin Mint");
  var buyAlchemies = makeClicker(alchemiesId, "Alchemy");
  var buyAccel = makeClicker(accelId, "Accelorator");
  var buyMult = makeClicker(multId, "Multplier");
  var buyAccelBoost = makeClicker(accelBoostId, "Accel. Boost");
  var isWorkerBuyable = makeCheckIfAvalible(workerId);
  var isInvestmentBuyable = makeCheckIfAvalible(investmentId);
  var isPrinterBuyable = makeCheckIfAvalible(printerId);
  var isCoinMintBuyable = makeCheckIfAvalible(coinMintId);
  var isAlchemiesBuyable = makeCheckIfAvalible(alchemiesId);
  var isAccelBuyable = makeCheckIfAvalible(accelId);
  var isMultBuyable = makeCheckIfAvalible(multId);
  var isAccelBoostBuyable = makeClicker(accelBoostId, "Accel. Boost");
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

  // src/buildings/diamond.ts
  var buyRefinery = makeClicker("buydiamond1", "Refineries");
  var buyCoalPlant = makeClicker("buydiamond2", "Coal Plant");
  var buyCoalRig = makeClicker("buydiamond3", "Coal Rig");
  var buyPikaxe = makeClicker("buydiamond4", "Pikaxe");
  var buyPandorasBox = makeClicker("buydiamond5", "Pandoras Box");
  var isRefineryBuyable = makeCheckIfAvalible("buydiamond1");
  var isCoalPlantBuyable = makeCheckIfAvalible("buydiamond2");
  var isCoalRigBuyable = makeCheckIfAvalible("buydiamond3");
  var isPikaxeBuyable = makeCheckIfAvalible("buydiamond4");
  var isPandorasBoxBuyable = makeCheckIfAvalible("buydiamond5");
  var buyDiamondUpgrade1 = makeClicker("buycrystalupgrade1", "Diamond Upgrade 1");
  var buyDiamondUpgrade2 = makeClicker("buycrystalupgrade2", "Diamond Upgrade 2");
  var buyDiamondUpgrade3 = makeClicker("buycrystalupgrade3", "Diamond Upgrade 3");
  var buyDiamondUpgrade4 = makeClicker("buycrystalupgrade4", "Diamond Upgrade 4");
  var buyDiamondUpgrade5 = makeClicker("buycrystalupgrade5", "Diamond Upgrade 5");
  var toggleAutobuyRefinery = makeClicker("toggle10", "Auto Refineries");
  var toggleAutobuyCoalPlant = makeClicker("toggle11", "Auto Coal Plant");
  var toggleAutobuyCoalRig = makeClicker("toggle12", "Auto Coal Rig");
  var toggleAutobuyPickaxe = makeClicker("toggle13", "Auto Pikaxe");
  var toggleAutobuyPandoraBox = makeClicker("toggle14", "Auto Pandoras Boxes");
  var setAutoPrestige = makeSetAuto("prestigeamount", "Auto Prestige");
  var toggleAutoPrestige = makeClicker("toggle15", "Toggle Auto Prestige");
  var toggleAutoPrestigeMode = makeClicker("prestigeautotoggle", "Auto Prestige Mode Toggle");
  function isAutoPrestigeEnabled() {
    let elm = document.getElementById("toggle15");
    if (elm && elm.style.borderColor === "red") {
      return false;
    } else if (elm && elm.style.borderColor === "green") {
      return true;
    } else {
      console.error("Cannont find auto prestige button");
      return 0;
    }
  }
  function getAutoPrestigeMode() {
    let elm = document.getElementById("prestigeautotoggle");
    if (elm && elm.innerText === "Mode: AMOUNT") {
      return "amount";
    } else if (elm && elm.innerText === "Mode: TIME") {
      return "time";
    } else {
      console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
      return 0;
    }
  }
  function setDiamondBuyQuant(quant) {
    switch (quant) {
      case "crystalone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystalten":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystalhundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystalthousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystal10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystal100k":
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
