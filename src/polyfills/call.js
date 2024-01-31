function myCall(obj, ...args) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.call is called on non-function")
    }

    obj.fn = this;

    const result = obj.fn(...args);

    delete obj.fn;

    return result;
}

Function.prototype.myCall = myCall;

const runPolyfill = () => {
    function printFullNameAndAddress(location) {
        console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${location}`)
    }

    const me = {
        firstName: "Prasad",
        lastName: "Naik"
    };

    printFullNameAndAddress.myCall(me, "Goa")
}

module.exports = {
    runPolyfill
}
