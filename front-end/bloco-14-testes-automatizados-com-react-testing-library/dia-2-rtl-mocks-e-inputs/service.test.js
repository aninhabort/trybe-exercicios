const { test, expect } = require('@jest/globals')
const service = require('./service');

test('teste se a função foi chamada, se seu retorno for 10 e quantas vezes foi chamado', () => {
    service.randomNum = jest.fn().mockReturnValue(10);

    expect(service.randomNum()).toBe(10);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledWith();
})
