import { makeClicker, makeCheckIfAvalible } from "../utils"

type buyCoinQuant = "coinone" | "cointen" | "coinhundred" | "cointhousand" | "coin10k" | "coin100k";

let workerId = "buycoin1";
let investmentId = "buycoin2";
let printerId = "buycoin3";
let coinMintId = "buycoin4";
let alchemiesId = "buycoin5";
let accelId = "buyaccelerator";
let multId = "buymultiplier";
let accelBoostId = "buyacceleratorboost";


export let buyWorker = makeClicker(workerId, "Worker");
export let buyInvestment = makeClicker(investmentId, "Investment");
export let buyPrinter = makeClicker(printerId, "Printer");
export let buyCoinMint = makeClicker(coinMintId, "Coin Mint");
export let buyAlchemies = makeClicker(alchemiesId, "Alchemy");
export let buyAccel = makeClicker(accelId, "Accelorator");
export let buyMult = makeClicker(multId, "Multplier");
export let buyAccelBoost = makeClicker(accelBoostId, "Accel. Boost");
export let isWorkerBuyable = makeCheckIfAvalible(workerId);
export let isInvestmentBuyable = makeCheckIfAvalible(investmentId);
export let isPrinterBuyable = makeCheckIfAvalible(printerId);
export let isCoinMintBuyable = makeCheckIfAvalible(coinMintId);
export let isAlchemiesBuyable = makeCheckIfAvalible(alchemiesId);
export let isAccelBuyable = makeCheckIfAvalible(accelId);
export let isMultBuyable = makeCheckIfAvalible(multId);
export let isAccelBoostBuyable = makeClicker(accelBoostId, "Accel. Boost");
export let toggleAutobuyWorker = makeClicker("toggle1", "Auto Worker");
export let toggleAutobuyInvestment = makeClicker("toggle2", "Auto Investment");
export let toggleAutobuyPrinter = makeClicker("toggle3", "Auto Printer");
export let toggleAutobuyCoinMint = makeClicker("toggle4", "Auto Coin Mint");
export let toggleAutobuyAlchemies = makeClicker("toggle5", "Auto Alchemy");
export let toggleAutobuyAccel = makeClicker("toggle6", "Auto Accelorator");
export let toggleAutobuyMult = makeClicker("toggle7", "Auto Multplier");
export let toggleAutobuyAccelBoost = makeClicker("toggle8", "Auto Accel. Boost");

export function setCoinBuyQuant(quant: buyCoinQuant) {
    switch (quant) {
        case "coinone":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "cointen":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "coinhundred":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "cointhousand":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "coin10k":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "coin100k":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        default:
            console.error("invalid input")
            return;
    }
}