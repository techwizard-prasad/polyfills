function myMap(callbackfn) {
    if (typeof callbackfn !== "function") {
        throw new Error(`Uncaught TypeError: ${typeof callbackfn} is not a function`)
    }

    const result = [];
    for (let index = 0; index < this.length; index++) {
        result.push(callbackfn(this[index], index, this));
    }
    return result
}

Array.prototype.myMap = myMap;


function runPolyfill() {
    const testArray = [1, 2, 3, 4, 5];

    const result = testArray.myMap((item, index, array) => {
        return item + index
    })

    console.log("Adding item and index: ", result)
}

module.exports = {
    runPolyfill
}
