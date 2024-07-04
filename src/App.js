import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador';
import Alteracao from './componentes/Alteracao';
import Tarefa from './componentes/Tarefa';

function App() {
  return (
    <div className="App">
      <Contador />
      <Alteracao />
      <Tarefa />
    </div>
  );
}

export default App;
