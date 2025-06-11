import {makeCheckIfAvalible, Type} from "./utils"

export function checkIfHaveAchivment(id: number) {
    if (id < 0 || id > 280) {
        console.error("invalid achivment id");
        return 0;
    }

    return makeCheckIfAvalible(`ach${id}`, Type.Upgrade);
}

export function checkIfAchivmentisRed(id: number) {
    if (id < 0 || id > 280) {
        console.error("invalid achivment id");
        return 0;
    }

    return makeCheckIfAvalible(`ach${id}`, Type.RedAchv);
}

export function checkIfAchivmentisPurple(id: number) {
    if (id < 0 || id > 280) {
        console.error("invalid achivment id");
        return 0;
    }

    return makeCheckIfAvalible(`ach${id}`, Type.PurpAchv);
}

export function checkIfAchivmentisNone(id: number) {
    if (id < 0 || id > 280) {
        console.error("invalid achivment id");
        return 0;
    }

    return makeCheckIfAvalible(`ach${id}`, Type.None);
}