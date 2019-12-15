let addResult = 10;
let result = add(5, 5);

if (result !== addResult) {
    throw Error(`预期的结果应为${addResult}, 结果为${result}`)
}

let reduceResult = 0;
let result1 = reduce(5, 5);

if (result1 !== reduceResult) {
    throw Error(`预期的结果应为${reduceResult}, 结果为${result1}`)
}