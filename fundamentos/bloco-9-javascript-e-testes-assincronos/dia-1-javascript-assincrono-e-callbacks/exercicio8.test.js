// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    expect(getPokemonDetails((pokemon) => pokemon.name ==='Pikachu').toEqual(new Error('Não temos esse pokémon para você :(')))
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    expect(getPokemonDetails((pokemon) => pokemon.name === 'Squirtle')).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun')
  });
});