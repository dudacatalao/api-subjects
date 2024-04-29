import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMateria from './components/cardMateria/CardMateria'
import CardTurma from './components/cardTurma/CardTurma'

function App() {
  const [materias, setMaterias] = useState([]);
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.70:8000/materias')
      .then(response => {
        setMaterias(response.data);
      })
      .catch(error => {
        console.error('erro ao buscar as matérias da API:', error);
      });

    axios.get('http://192.168.1.70:8000//turmas')
      .then(response => {
        setTurmas(response.data);
      })
      .catch(error => {
        console.error('erro ao buscar as turmas da API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Matérias</h1>
    
      {materias.map(materia => (
        <CardMateria key={materia.id} título={materia.título} local={materia.local} responsável={materia.responsável} semestre={materia.semestre} turma={materia.turma}/>
        // <li key={materia.id}>
        //   <h2>{materia.título}</h2>
        //   <p>Responsável: {materia.responsável}</p>
        //   <p>Local: {materia.local}</p>
        //   <p>Semestre: {materia.semestre}</p>
        //   <p>Turma: {materia.turma}</p>
        // </li>
      ))}
   

      <h1>Lista de Turmas</h1>
      
        {turmas.map(turma => (
          <CardTurma key={turma.id} nome={turma.nome} semestre={turma.semestre}/>
          // <li key={turma.id_turma}>
          //   <h2>{turma.nome}</h2>
          //   <p>Semestre: {turma.semestre}</p>
          // </li>
        ))}

    </div>
  );
}

export default App;
