let {add, reduce} = require('./match');

test('测试加法 5 + 5', () => {
    expect(add(5, 5)).toBe(10);
});

test("测试减法 5 - 5" , () => {
    expect(reduce(5,5)).toBe(0);
});
