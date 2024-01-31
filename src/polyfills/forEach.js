function myForEach(callbackfn) {
  if (typeof callbackfn !== "function") {
    throw new Error(`Uncaught TypeError: ${typeof callbackfn} is not a function`)
  }

  for (let index = 0; index < this.length; index++) {
    callbackfn(this[index], index, this);
  }
}

Array.prototype.myForEach = myForEach;


function runPolyfill() {
  const testArray = [1, 2, 3, 4, 5];

  testArray.myForEach((item, index, array) => {
    console.log({ item, index, array })
  })
}

module.exports = {
  runPolyfill
}
