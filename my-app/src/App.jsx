import { useState } from 'react';
import './App.css';


function Header() {
  return (
    <header className="bg-primary text-center py-3">
      <div className="container">
        <h1 className="text-white">Gestor de Tarefas</h1>
      </div>
    </header>
  );
}


function TarefaItem({ tarefa, onConcluir, onExcluir }) {
  const [concluida, setConcluida] = useState(false);

  const handleConcluir = () => {
    setConcluida(!concluida);
    if (onConcluir) onConcluir(tarefa.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: concluida ? 'line-through' : 'none' }}>
        {tarefa.texto}
      </span>
      <div>
        <button 
          className="btn btn-success btn-sm me-2"
          onClick={handleConcluir}
        >
          {concluida ? 'Desfazer' : 'Concluir'}
        </button>
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => onExcluir(tarefa.id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}


function Main() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const novaTarefaObj = {
        id: Date.now(), 
        texto: novaTarefa,
        concluida: false
      };
      setTarefas([...tarefas, novaTarefaObj]);
      setNovaTarefa(''); 
    }
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };


  const concluirTarefa = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id 
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    ));
  };

  return (
    <section className="mb-4">
      <div className="container mt-4">
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Digite a nova tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && adicionarTarefa()}
          />
          <button 
            className="btn btn-primary"
            onClick={adicionarTarefa}
          >
            Adicionar Tarefa
          </button>
        </div>
      </div>
      
      <div className="container mt-4">
        {tarefas.length === 0 ? (
          <div className="alert alert-info text-center">
            Nenhuma tarefa cadastrada. Adicione uma tarefa acima!
          </div>
        ) : (
          <ul className="list-group">
            {tarefas.map(tarefa => (
              <TarefaItem 
                key={tarefa.id}
                tarefa={tarefa}
                onConcluir={concluirTarefa}
                onExcluir={excluirTarefa}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}


function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;