let coin1 = document.getElementById("buycoin1");
let coin2 = document.getElementById("buycoin2");
let coin3 = document.getElementById("buycoin3");
let coin4 = document.getElementById("buycoin4");
let coin5 = document.getElementById("buycoin5");
let accelerator = document.getElementById("buyaccelerator");
let mult = document.getElementById("buymultiplier");
let boost = document.getElementById("buyacceleratorboost");
let coin1autobuy = document.getElementById("toggle1");
let coin2autobuy = document.getElementById("toggle2");
let coin3autobuy = document.getElementById("toggle3");
let coin4autobuy = document.getElementById("toggle4");
let coin5autobuy = document.getElementById("toggle5");
let accelautobuy = document.getElementById("toggle3");
let multautobuy = document.getElementById("toggle4");
let acelboostautobuy = document.getElementById("toggle5");

export function buyWorker() {
    if (coin1) {
        coin1.click()
    } else {
        console.error("Cannot find worker button");
    }
}

export function buyInvestment() {
    if (coin2) {
        coin2.click()
    } else {
        console.error("Cannot find investment button");
    }
}

export function buyPrinter() {
    if (coin3) {
        coin3.click()
    } else {
        console.error("Cannot find printer button");
    }
}

export function buyCoinMint() {
    if (coin4) {
        coin4.click()
    } else {
        console.error("Cannot find coin mint button");
    }
}

export function buyAlchemies() {
    if (coin5) {
        coin5.click()
    } else {
        console.error("Cannot find alchemies button");
    }
}

export function buyAccel() {
    if (accelerator) {
        accelerator.click()
    } else {
        console.error("Cannot find acclerator button");
    }
}

export function buyMult() {
    if (mult) {
        mult.click()
    } else {
        console.error("Cannot find mult button");
    }
}

export function buyAccelBoost() {
    if (boost) {
        boost.click()
    } else {
        console.error("Cannot find accel. boost button");
    }
}

export function toggleAutobuyWorker() {
    if (coin1autobuy) {
        coin1autobuy.click()
    } else {
        console.error("Cannot find auto worker button");
    }
}

export function toggleAutobuyInvestment() {
    if (coin2autobuy) {
        coin2autobuy.click()
    } else {
        console.error("Cannot find auto investment button");
    }
}

export function toggleAutobuyPrinter() {
    if (coin3autobuy) {
        coin3autobuy.click()
    } else {
        console.error("Cannot find auto printer button");
    }
}

export function toggleAutobuyCoinMint() {
    if (coin4autobuy) {
        coin4autobuy.click()
    } else {
        console.error("Cannot find auto coin mint button");
    }
}

export function toggleAutobuyAlchemies() {
    if (coin5autobuy) {
        coin5autobuy.click()
    } else {
        console.error("Cannot find auto alchemies button");
    }
}

export function toggleAutobuyAccel() {
    if (accelautobuy) {
        accelautobuy.click()
    } else {
        console.error("Cannot find auto printer button");
    }
}

export function toggleAutobuyMult() {
    if (multautobuy) {
        multautobuy.click()
    } else {
        console.error("Cannot find auto coin mint button");
    }
}

export function toggleAutobuyAccelBoost() {
    if (acelboostautobuy) {
        acelboostautobuy.click()
    } else {
        console.error("Cannot find auto alchemies button");
    }
}