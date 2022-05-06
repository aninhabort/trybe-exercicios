const compromissos = ['Ler conteudo do course', 'Fazer exercicio do dia']

const Task = (value) => {
  return (
    <div>
      <li>{compromissos.map((task) => task)[0]}</li>
      <li>{compromissos.map((task) => task)[1]}</li>
    </div>
  );
}


function App() {
  return (
    <div>
      <header>
      <Task />
      </header>
    </div>
  );
}

export default App;
