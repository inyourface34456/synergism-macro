import {makeClicker, makeCheckIfAvalible, makeSetAuto, Type} from "../utils"

type buyQuant = "particleone" | "particlesten" | "particlehundred" | "particlethousand" | "particle10k" | "particle100k";

export let buyProton = makeClicker("buyparticles1", "Proton");
export let isProtonbuyable = makeCheckIfAvalible("buyparticles1", Type.Bulding);
export let toggleAutobuyProton = makeClicker("toggle22", "Proton Auto Buy");
export let buyElement = makeClicker("buyparticles2", "Element");
export let isElementbuyable = makeCheckIfAvalible("buyparticles2", Type.Bulding);
export let toggleAutobuyElement = makeClicker("toggle23", "Element Auto Buy");
export let buyPulsar = makeClicker("buyparticles3", "Pulsars");
export let isPulsarbuyable = makeCheckIfAvalible("buyparticles3", Type.Bulding);
export let toggleAutobuyPulsar = makeClicker("toggle24", "Pulsar Auto Buy");
export let buyQuasar = makeClicker("buyparticles4", "Quarsars");
export let isQuasarbuyable = makeCheckIfAvalible("buyparticles4", Type.Bulding);
export let toggleAutobuyQuasar = makeClicker("toggle25", "Quasar Auto Buy");
export let buyGalacticNuclei = makeClicker("buyparticles5", "Galactic Nuclei");
export let isGalacticNucleibuyable = makeCheckIfAvalible("buyparticles5", Type.Bulding);
export let toggleAutobuyGalacticNuclei = makeClicker("toggle26", "Galactic Nuclei Auto Buy");
export let setAutoParticle = makeSetAuto("reincarnationamount", "Auto Reincarnate");
export let toggleAutoParticle = makeClicker("toggle27", "Toggle Auto Reincarnate");
export let toggleAutoParticleMode = makeClicker("reincarnateautotoggle", "Auto Particle Mode Toggle");

export function isAutoParticleEnabled() {
    let elm = document.getElementById("toggle27");

    if (elm && elm.style.borderColor === "red") {
        return false;
    } else if (elm && elm.style.borderColor === "green") {
        return true;
    } else {
        console.error("Cannont find auto Particle button");
        return 0;
    }
}

export function getAutoParticleMode() {
    let elm = document.getElementById("reincarnateautotoggle");

    if (elm && elm.innerText === "Mode: AMOUNT") {
        return "amount";
    } else if (elm && elm.innerText === "Mode: TIME") {
        return "time";
    } else {
        console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
        return 0;
    }
}

export function setParticleBuyQuant(quant: buyQuant) {
    switch (quant) {
        case "particleone":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "particlesten":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "particlehundred":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "particlethousand":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "particle10k":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "particle100k":
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