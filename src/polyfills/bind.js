function myBind(obj, ...args1) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind is called on non-function")
    }

    obj.fn = this;

    return function (...args2) {
        obj.fn(...args1, ...args2);
        delete obj.fn
    }
}

Function.prototype.myBind = myBind;

const runPolyfill = () => {
    function printFullNameAndAddress(city, state) {
        console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${city} - ${state}`)
    }

    const me = {
        firstName: "Prasad",
        lastName: "Naik"
    };

    const bounded = printFullNameAndAddress.myBind(me, "Panjim");
    bounded("Goa");
}

module.exports = {
    runPolyfill
}