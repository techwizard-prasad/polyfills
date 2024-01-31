function myReduce(callbackfn, initialValue) {
    if (typeof callbackfn !== "function") {
        throw new Error(`Uncaught TypeError: ${typeof callbackfn} is not a function`)
    }
    const hasInitialValue = ![null, undefined].includes(initialValue);

    let result = hasInitialValue ? initialValue : this[0];

    for (let index = hasInitialValue ? 0 : 1; index < this.length; index++) {
        result = callbackfn(result, this[index], index, this)
    }

    return result
}

Array.prototype.myReduce = myReduce;


function runPolyfill() {
    const testArray = [{ name: "Prasad", surname: "Naik" }, { name: "Nikhil", surname: "Nayak" }, { name: "Rushabh", surname: "Wadkar" }];

    const studentsWithId = testArray.myReduce((acc, cur, index) => ({ ...acc, [`STU${index}`]: { ...cur } }), {});

    console.log("Students with ID:", studentsWithId);
}

module.exports = {
    runPolyfill
}
