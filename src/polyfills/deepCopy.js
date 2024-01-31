function deepCopy(value) {
    if (["boolean", "number", "string"].includes(typeof value)) {
        return value
    } else if (Array.isArray(value)) {
        return value.map(el => deepCopy(el))
    } else {
        return Object.keys(value).reduce((a, key) => ({
            ...a,
            [key]: deepCopy(value[key])
        }), {})
    }
}

const runPolyfill = () => {
    const inputPrimitive = "Prasad";
    const input2Array = [1, 2, 3, 4];
    const input3NestedArray = [1, 2, 3, [4, 5]];
    const input4Object = { name: "Prasad", surname: "Naik" };
    const input5NestedObject = { name: "Prasad", surname: "Naik", location: { city: "Panjim", state: "Goa", coordinates: [15.4909, 73.8278] } };

    // const output = deepCopy(inputPrimitive);
    // output = 'Nikhil';

    // const output = deepCopy(input2Array);
    // output.push(5)

    // const output = deepCopy(input3NestedArray);
    // output[3].push(6)

    // const output = deepCopy(input4Object);
    // output.name = "Nikhil"

    const output = deepCopy(input5NestedObject);
    output.location.coordinates[0] = 15.50

    console.log({ input5NestedObject, output })
}

module.exports = {
    runPolyfill
}