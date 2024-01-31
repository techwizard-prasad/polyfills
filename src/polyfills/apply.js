function myApply(obj, args) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.apply is called on non-function")
    }

    if (!Array.isArray(args)) {
        throw new Error("args should be of Array type")
    }

    obj.fn = this;

    const result = obj.fn(...args);

    delete obj.fn;

    return result;
}

Function.prototype.myApply = myApply;

const runPolyfill = () => {
    function printFullNameAndAddress(location) {
        console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${location}`)
    }

    const me = {
        firstName: "Prasad",
        lastName: "Naik"
    };

    printFullNameAndAddress.myApply(me, ["Goa"])
}

module.exports = {
    runPolyfill
}
