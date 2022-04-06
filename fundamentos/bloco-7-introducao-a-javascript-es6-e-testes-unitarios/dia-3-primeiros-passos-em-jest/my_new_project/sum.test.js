const { sum, myRemove, myFizzBuzz } = require('./sum');


describe('Testes da função sum', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
        expect(() => {
            sum(4, "5")
        }).toThrow('parameters must be numbers')
    })

    it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => {
            sum(4, "5")
        }).toThrow('parameters must be numbers')
    })
})

describe('Testes da função myRemove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})

describe('Testes da função myFizzBuzz', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    })

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(3)).toEqual('fizz')
    })

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(5)).toEqual('buzz')
    })

    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(8)).toEqual(8)
    })

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('Ola')).toEqual(false)
    })
})