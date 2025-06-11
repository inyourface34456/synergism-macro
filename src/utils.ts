export enum Layer {
  Pristige,
  Ascend,
}

export enum Type {
  Bulding,
  Upgrade,
  RedAchv,
  PurpAchv,
  None,
}

export function makeClicker(id: string, disId: string) {
  const element = document.getElementById(id);
  return function () {
    if (element) {
      element.click();
    } else {
      console.error(`cannot find the ${disId} button: ${element}"`);
    }
  };
}

export function checkClassList(id: string, className: string) {
  let element = document.getElementById(id);
  if (!element) {
    console.error(`cannot find the element ${id}: ${element}`);
    return 0;
  } else if (element && element.classList.contains(className)) {
    return true;
  } else {
    return false;
  }
}

export function makeCheckIfAvalible(id: string, type: Type) {
  switch (type) {
    case Type.Bulding:
      return function () {
        let res = checkClassList(id, "buildingPurchaseBtnAvailable");

        if (res === 0) {
          return 0;
        } else if (res) {
          return true;
        } else {
          return false;
        }
      }

    case Type.Upgrade:
      return function () {
        let res = checkClassList(id, "green-background");

        if (res === 0) {
          return 0;
        } else if (res) {
          return true;
        } else {
          return false;
        }
      }

    case Type.RedAchv:
      return function () {
        let res = checkClassList(id, "redach");

        if (res === 0) {
          return 0;
        } else if (res) {
          return true;
        } else {
          return false;
        }
      }

    case Type.PurpAchv:
      return function () {
        let res = checkClassList(id, "purpleach");

        if (res === 0) {
          return 0;
        } else if (res) {
          return true;
        } else {
          return false;
        }
      }

    case Type.None:
      return function () {
        let res1 = makeCheckIfAvalible(id, Type.PurpAchv)();
        let res2 = makeCheckIfAvalible(id, Type.RedAchv)();

        if (res1 === 0 || res2 === 0) {
          return 0;
        } else if (res1 === true || res2 === true) {
          return true;
        } else {
          return false;
        }
      }

    default:
      return function () {
        let res = checkClassList(id, "buildingPurchaseBtnAvailable");

        if (res === 0) {
          return 0;
        } else if (res) {
          return true;
        } else {
          return false;
        }
      }
  }
}

export function makeCheckIfAutomated(id: string, layer: Layer) {
  switch (layer) {
    case Layer.Ascend:
      return function () {
        let res = checkClassList(id, "constUpgradeAuto");

        if (res === 0) {
          return 0;
        } else if (res) {
          return true;
        } else {
          return false;
        }
      }

    case Layer.Pristige:
      return function () {
        let res = document.getElementById(id);

        if (res && res.style.backgroundColor === "green") {
          return true;
        } else if (!(res?.style.backgroundColor)) {
          return false
        }
      }
  }
}

export function makeSetAuto(id: string, disId: string) {
  return function (num: string) {
    let elm: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;

    if (elm) {
      elm.value = num;
    } else {
      console.error(`cannot find ${disId}`);
    }
  }
}