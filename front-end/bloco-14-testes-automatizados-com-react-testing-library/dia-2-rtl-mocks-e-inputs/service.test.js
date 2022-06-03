const { test, expect } = require('@jest/globals');
const service = require('./service');

test('teste se a função foi chamada, se seu retorno for 10 e quantas vezes foi chamado', () => {
    service.randomNum = jest.fn().mockReturnValue(10);

    expect(service.randomNum()).toBe(10);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledWith();
})

test('teste se ao receber dois parametros e retornar a divisao do primeiro pelo segundo, ela deve ocorrer uma vez', () => {
    service.randomNum = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNum(10, 2)).toBe(5);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledWith(10, 2);
})