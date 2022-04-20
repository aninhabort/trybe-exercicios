beforeEach(() => console.log('1 - beforeEach')); //Antes do teste
afterEach(() => console.log('1 - afterEach')); // Depois do teste

test('', () => console.log('1 - test')); //Teste

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); //Antes do teste de dentro do discribe
  afterEach(() => console.log('2 - afterEach')); //Depois do teste de dentro do discribe

  test('', () => console.log('2 - test')); //Teste de dentro do discribe
});