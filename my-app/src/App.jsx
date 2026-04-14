import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Header() {
  return (
    <header className="bg-primary text-center py-3">
      <div className="container">
        <h1 className="text-white">Gestor de Tarefas</h1>
      </div>
    </header>
  );
}

function Main() {
  return (
    <section className="mb-4">
      <div className="container mt-4">
        <input type="text" id="tarefa" className="form-control" placeholder="Digite a nova tarefa" />
      </div>
      <button id="adicionar" className="btn btn-primary mt-4" onClick={() => function () {
        const tarefaInput = document.getElementById('tarefa');
        if (tarefaInput.value.trim() !== '') {
          const li = document.createElement('li');
          li.classNameName = 'list-group-item d-flex justify-content-between align-items-center';
          li.textContent = tarefaInput.value;

          const concluirBtn = document.createElement('button');
          concluirBtn.classNameName = 'btn btn-success btn-sm';
          concluirBtn.textContent = 'Concluir';
          concluirBtn.addEventListener('click', function () {
            li.style.textDecoration = 'line-through';
          });


          const excluirBtn = document.createElement('button');
          excluirBtn.classNameName = 'btn btn-danger btn-sm';
          excluirBtn.textContent = 'Excluir';
          excluirBtn.addEventListener('click', function () {
            li.remove();
          });

          li.appendChild(concluirBtn);
          li.appendChild(excluirBtn);
          document.getElementById('lista-tarefas').appendChild(li);
          tarefaInput.value = '';
        }
      }} >
        Adicionar Tarefa
      </button>
      <ul id="lista-tarefas" className="list-group mt-4"></ul>

    </section >
  )
}
function App() {

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
