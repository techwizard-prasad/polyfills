function myFilter(callbackfn) {
    if (typeof callbackfn !== "function") {
        throw new Error(`Uncaught TypeError: ${typeof callbackfn} is not a function`)
    }

    const result = [];

    for (let index = 0; index < this.length; index++) {
        if (callbackfn(this[index], index, this)) {
            result.push(this[index])
        }
    }

    return result
}

Array.prototype.myFilter = myFilter;

function runPolyfill() {
    const testArray = [1, 2, 3, 4, 5];

    const result = testArray.myFilter((item, index, array) => {
        return item % 2 === 0;
    })

    console.log("Elements divisible by 2 are: ", result)
}

module.exports = {
    runPolyfill
}