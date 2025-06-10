import { makeClicker, makeCheckIfAvalible, makeSetAuto, makeCheckIfAutomated, Layer, Type} from "../utils"

type buyAscendQuant = "tesseractone" | "tesseractten" | "tesseracthundred" | "tesseractthousand" | "tesseract10k" | "tesseract100k";

export let buyDot = makeClicker("buyTesseracts1", "Dot");
export let isDotbuyable = makeCheckIfAvalible("buyTesseracts1", Type.Bulding);
export let toggleAutobuyDot = makeClicker("tesseractAutoToggle1", "Auto Buy Dot");
export let buyVector = makeClicker("buyTesseracts2", "Vector");
export let isVectorbuyable = makeCheckIfAvalible("buyTesseracts2", Type.Bulding);
export let toggleAutobuyVector = makeClicker("tesseractAutoToggle2", "Auto Buy Vector");
export let buyThreeSpace = makeClicker("buyTesseracts3", "Three-Space");
export let isThreeSpacebuyable = makeCheckIfAvalible("buyTesseracts3", Type.Bulding);
export let toggleAutobuyThreeSpace = makeClicker("tesseractAutoToggle3", "Auto Buy Three-Space");
export let buyBentTime = makeClicker("buyTesseracts4", "Bent Time");
export let isBentTimebuyable = makeCheckIfAvalible("buyTesseracts4", Type.Bulding);
export let toggleAutobuyBentTime = makeClicker("tesseractAutoToggle4", "Auto Buy Bent Time");
export let buyHilbertSpace = makeClicker("buyTesseracts5", "Hilbert Space");
export let isHilbertSpacebuyable = makeCheckIfAvalible("buyTesseracts5", Type.Bulding);
export let toggleAutobuyHilbertSpace = makeClicker("tesseractAutoToggle5", "Auto Buy Hilbert Space");
export let setAutoBuyTess = makeSetAuto("tesseractAmount", "Auto Buy Tess");
export let toggleAutoBuyTess = makeClicker("tesseractautobuytoggle", "Toggle Auto Reincarnate");
export let toggleAutoTessBuyMode = makeClicker("tesseractautobuymode", "Auto Particle Mode Toggle");
export let constentUpgrade1 = makeClicker("buyConstantUpgrade1", "Constant Upgrade 1");
export let constentUpgrade2 = makeClicker("buyConstantUpgrade2", "Constant Upgrade 2");
export let constentUpgrade3 = makeClicker("buyConstantUpgrade3", "Constant Upgrade 3");
export let constentUpgrade4 = makeClicker("buyConstantUpgrade4", "Constant Upgrade 4");
export let constentUpgrade5 = makeClicker("buyConstantUpgrade5", "Constant Upgrade 5");
export let constentUpgrade6 = makeClicker("buyConstantUpgrade6", "Constant Upgrade 6");
export let constentUpgrade7 = makeClicker("buyConstantUpgrade7", "Constant Upgrade 7");
export let constentUpgrade8 = makeClicker("buyConstantUpgrade8", "Constant Upgrade 8");
export let constentUpgrade9 = makeClicker("buyConstantUpgrade9", "Constant Upgrade 9");
export let constentUpgrade10 = makeClicker("buyConstantUpgrade10", "Constant Upgrade 10");
export let isConstantUpgrade1Automated = makeCheckIfAutomated("buyConstantUpgrade1", Layer.Ascend);
export let isConstantUpgrade2Automated = makeCheckIfAutomated("buyConstantUpgrade2", Layer.Ascend);
export let isConstantUpgrade3Automated = makeCheckIfAutomated("buyConstantUpgrade3", Layer.Ascend);
export let isConstantUpgrade4Automated = makeCheckIfAutomated("buyConstantUpgrade4", Layer.Ascend);
export let isConstantUpgrade5Automated = makeCheckIfAutomated("buyConstantUpgrade5", Layer.Ascend);
export let isConstantUpgrade6Automated = makeCheckIfAutomated("buyConstantUpgrade6", Layer.Ascend);
export let isConstantUpgrade7Automated = makeCheckIfAutomated("buyConstantUpgrade7", Layer.Ascend);
export let isConstantUpgrade8Automated = makeCheckIfAutomated("buyConstantUpgrade8", Layer.Ascend);
export let isConstantUpgrade9Bought = makeCheckIfAutomated("buyConstantUpgrade9", Layer.Ascend);
export let isConstantUpgrade10Bought = makeCheckIfAutomated("buyConstantUpgrade10", Layer.Ascend);

export function isAutoTessBuldingEnabled() {
    let elm = document.getElementById("tesseractautobuytoggle");

    if (elm && elm.style.borderColor === "red") {
        return false;
    } else if (elm && elm.style.borderColor === "green") {
        return true;
    } else {
        console.error("Cannont find auto tess bulding buy button");
        return 0;
    }
}

export function getAutoTessBuyMode() {
    let elm = document.getElementById("tesseractautobuymode");

    if (elm && elm.innerText === "Mode: AMOUNT") {
        return "amount";
    } else if (elm && elm.innerText === "Mode: PRECENTAGE") {
        return "precentage";
    } else {
        console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
        return 0;
    }
}


export function setTessBuildQuant(quant: buyAscendQuant) {
    switch (quant) {
        case "tesseractone":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "tesseractten":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "tesseracthundred":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "tesseractthousand":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "tesseract10k":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "tesseract100k":
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