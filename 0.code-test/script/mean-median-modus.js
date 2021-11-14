export function mean(...arrs) {
    let total = 0;
    arrs.forEach(arr => {
        total += arr;
    });
    return console.info(total / (arrs.length));
}

export function median(...arrs) {
    arrs.sort(function (a, b) {
        return a - b;
    });
    console.info(arrs);
}


export function modus(...numbs) {
    // count amount of occurences of each number

    // create object
    const obj = {};

    // loop over numbs
    numbs.forEach(number => {
        // for each number in numbs,
        // if it doesn't already exist as a key on the
        // object, create one and set its value to 1.
        if (!obj[number]) {
            obj[number] = 1;
        } else {
            // if it already exists as key on the object,
            // increment its corresponding value.
            obj[number] += 1;
        }
    });

    // return object key with highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
        }
    }

    // convert key back to number
    return console.info(Number(highestValueKey));
}