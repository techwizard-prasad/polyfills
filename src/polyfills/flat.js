function myFlat(depth = 1) {
    const result = []

    for (let el of this) {
        if (!Array.isArray(el) || depth === 0) {
            result.push(el)
        } else {
            result.push(...el.myFlat(depth - 1));
        }
    }


    return result
}

Array.prototype.myFlat = myFlat;

const runPolyfill = () => {
    const array = [1, 2, 3, 4, 5];

    const array2 = [1, 2, [3, 4]];

    const array3 = [1, 2, [3, [4, [5]]]];

    const result1 = array.myFlat();
    const result2 = array2.myFlat();
    const result3D2 = array3.myFlat(2);
    const result4D3 = array3.myFlat();
    const result5DI = array3.myFlat(Number.POSITIVE_INFINITY);

    console.log({
        result1,
        result2,
        result3D2,
        result4D3,
        result5DI
    })
}

module.exports = {
    runPolyfill
}