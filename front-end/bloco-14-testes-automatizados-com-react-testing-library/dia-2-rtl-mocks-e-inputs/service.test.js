const randomNum = require('./service')

test('teste se a função foi chamada', () => {
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toBe(10);
})