import {makeClicker} from "../utils"

type buyAscendQuant = "offeringone" | "offeringten" | "offeringhundred" | "offeringthousand" | "offering10k" | "offering100k";

export let sacSpeedRune = makeClicker("activaterune1", "Speed Rune");
export let sacDuplicationRune = makeClicker("activaterune2", "Duplication Rune");
export let sacPrismRune = makeClicker("activaterune3", "Prism Rune");
export let sacThriftRune = makeClicker("activaterune4", "Thrift Rune");
export let sacSIRune = makeClicker("activaterune5", "Superior Intellect Rune");
export let sacIARune = makeClicker("activaterune6", "Infinite Ascent Rune");
export let sacAAGRune = makeClicker("activaterune7", "AAOG Rune");

export function setOfferingsBuildQuant(quant: buyAscendQuant) {
    switch (quant) {
        case "offeringone":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "offeringten":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "offeringhundred":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "offeringthousand":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "offering10k":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "offering100k":
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