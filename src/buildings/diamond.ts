import {makeClicker} from "../utils"

type buyQuant = "crystalone" |"crystalten" | "crystalhundred" | "crystalthousand" | "crystal10k" | "crystal100k";

export let buyRefinery = makeClicker("buydiamond1", "Refineries");
export let buyCoalPlant = makeClicker("buydiamond2", "Coal Plant");
export let buyCoalRig = makeClicker("buydiamond3", "Coal Rig");
export let buyPikaxe = makeClicker("buydiamond4", "Pikaxe");
export let buyPandorasBoxe = makeClicker("buydiamond5", "Pandoras Box");
export let toggleAutobuyRefinery = makeClicker("toggle10", "Auto Refineries");
export let toggleAutobuyCoalPlant = makeClicker("toggle11", "Auto Coal Plant");
export let toggleAutobuyCoalRig = makeClicker("toggle12", "Auto Coal Rig");
export let toggleAutobuyPickaxe = makeClicker("toggle13", "Auto Pikaxe");
export let toggleAutobuyPandoraBox = makeClicker("toggle14", "Auto Pandoras Boxes");

export function setDiamondBuyQuant(quant: buyQuant) {
    switch (quant) {
        case "crystalone":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "crystalten":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystalhundred":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystalthousand":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystal10k":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystal100k":
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