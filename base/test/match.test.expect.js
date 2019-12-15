let expect = (result) => {
    return {
        toBe(actual) {
            if (result !== actual) {
                throw new Error(`期待的结果为${actual}, 而输出的结果为${result}`)
            }
        }
    }
};

let test = (desc, fn) => {
    try {
        fn();
        console.log(`${desc} 通过测试`);
    } catch (e) {
        console.log(`${desc} 没有通过测试; ${e.message}`);
    }
};

test('测试加法 5 + 5', () => {
    expect(add(5, 5)).toBe(10);
});

test("测试减法 5 - 5" , () => {
    expect(reduce(5,5)).toBe(0);
});
