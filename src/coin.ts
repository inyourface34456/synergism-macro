import {makeClicker} from "./utils"

export type buyQuant = "coinone" |"cointen" | "coinhundred" | "cointhousand" | "coin10k" | "coin100k";

export let buyWorker = makeClicker("buycoin1", "Worker");
export let buyInvestment = makeClicker("buycoin2", "Investment");
export let buyPrinter = makeClicker("buycoin3", "Printer");
export let buyCoinMint = makeClicker("buycoin4", "Coin Mint");
export let buyAlchemies = makeClicker("buycoin5", "Alchemy");
export let buyAccel = makeClicker("buyaccelerator", "Accelorator");
export let buyMult = makeClicker("buymultiplier", "Multplier");
export let buyAccelBoost = makeClicker("buyacceleratorboost", "Accel. Boost");
export let toggleAutobuyWorker = makeClicker("toggle1", "Auto Worker");
export let toggleAutobuyInvestment = makeClicker("toggle2", "Auto Investment");
export let toggleAutobuyPrinter = makeClicker("toggle3", "Auto Printer");
export let toggleAutobuyCoinMint = makeClicker("toggle4", "Auto Coin Mint");
export let toggleAutobuyAlchemies = makeClicker("toggle5", "Auto Alchemy");
export let toggleAutobuyAccel = makeClicker("toggle6", "Auto Accelorator");
export let toggleAutobuyMult = makeClicker("toggle7", "Auto Multplier");
export let toggleAutobuyAccelBoost = makeClicker("toggle8", "Auto Accel. Boost");

export function setCoinBuyQuant(quant: buyQuant) {
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