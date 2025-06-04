export function makeClicker(id: string, disId: string) {
  const element = document.getElementById(id);
  return function () {
    if (element) {
      element.click();
    } else {
      console.error(`cannot find the ${disId} button"`);
    }
  };
}

export function checkClassList(id: string, className: string) {
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

export function makeCheckIfAvalible(id: string) {
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

