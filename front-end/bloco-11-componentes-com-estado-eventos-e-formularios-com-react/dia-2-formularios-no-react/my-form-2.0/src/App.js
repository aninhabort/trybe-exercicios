import './App.css';

function App() {
  return (
    <form>
      <h1>Formulário</h1>
      <fieldset>
        <div className='forms'>
          <div className='text-forms'>
            <label for='nome'>Nome:<abbr title="campo obrigatório">*</abbr></label>
            <input type='text' id='nome' name='nome' maxlength='40' required></input>

            <label for='email'>Email:<abbr title="campo obrigatório">*</abbr></label>
            <input type='email' id='email' name='email' maxLength='50' required></input>

            <label for='cpf'>CPF:<abbr title="campo obrigatório">*</abbr></label>
            <input type='text' id='cpf' name='cpf' maxLength='11' required></input>

            <label for='endereço'>Endereço:<abbr title="campo obrigatório">*</abbr></label>
            <input type='text' id='endereco' name='endereco' maxLength='200' required></input>

            <label for='cidade'>Cidade:<abbr title="campo obrigatório">*</abbr></label>
            <input type='text' id='cidade' name='cidade' maxLength='28' required></input>

            <label for='estado'>Estado:<abbr title="campo obrigatório">*</abbr></label>
            <select name='estado' required>
              <option value='AC'>Acre</option>
              <option value='AL'>Alagoas</option>
              <option value='AP'>Amapá</option>
              <option value='AM'>Amazonas</option>
              <option value='BA'>Bahia</option>
              <option value='CE'>Ceará</option>
              <option value='DF'>Destrito Federal</option>
              <option value='ES'>Espirito Santo</option>
              <option value='GO'>Gioás</option>
              <option value='MA'>Maranhão</option>
              <option value='MT'>Mato Grosso</option>
              <option value='MS'>Mato Grosso do Sul</option>
              <option value='MG'>Minas Gerais</option>
              <option value='PA'>Pará</option>
              <option value='PB'>Paraíba</option>
              <option value='PR'>Paraná</option>
              <option value='PE'>Pernambuco</option>
              <option value='PI'>Piauí</option>
              <option value='RJ'>Rio de Janeiro</option>
              <option value='RN'>Rio Grande do Norte</option>
              <option value='RS'>Rio Grande do Sul</option>
              <option value='RO'>Rondônia</option>
              <option value='RR'>Roraima</option>
              <option value='SC'>Santa Catarina</option>
              <option value='SP'>São Paulo</option>
              <option value='SE'>Sergipe</option>
              <option value='TO'>Tocantins</option>
            </select>

            <p>Tipo:<abbr title="campo obrigatório">*</abbr></p>
            <div>
              <input type='radio' id='casa' name='tipo' value='casa' required></input>
              <label for='casa'>Casa</label>
              <input type='radio' id='apartamento' name='tipo' value='casa' required></input>
              <label for='apartamento'>Apartemento</label>
            </div>

          </div>

        </div>
      </fieldset>

      <fieldset>
      <label for='resumo-do-curriculo'>Resumo do currículo<abbr title="campo obrigatório">*</abbr></label>
        <textarea rows='4' cols='50' id='resumo-do-curriculo' name='resumo-do-curriculo' maxLength='1000' required ></textarea>
        <label for='cargo'>Cargo<abbr title="campo obrigatório">*</abbr></label>
        <textarea rows='4' cols='50' id='cargo' name='cargo' maxLength='40' required ></textarea>
        <label for='descricao-cargo'>Descrição do cargo:<abbr title="campo obrigatório">*</abbr></label>
        <input type='text' maxLength='500' required></input>
      </fieldset>
      <div className='buttons'>
      <button type='submit'>Enviar</button>
      <button type='reset'>Limpar</button>        
      </div>
    </form>
  );
}

export default App;
