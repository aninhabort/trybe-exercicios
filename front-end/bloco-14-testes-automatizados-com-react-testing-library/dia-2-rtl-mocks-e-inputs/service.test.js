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

test('teste se ao receber 3 parametros, sendo multiplicado, resetado, retornando o dobro', () => {
    service.randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNum(10, 2, 4)).toBe(80);
    expect(service.randomNum).toHaveBeenCalled();
    
    service.randomNum.mockReset();
    service.randomNum = jest.fn().mockImplementation((a,) => a * 2);
    expect(service.randomNum(10)).toBe(20);
})