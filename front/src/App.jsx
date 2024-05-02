import  { useState, useEffect } from 'react';
import axios from 'axios';
import CardMateria from './components/cardMateria/CardMateria';
import CardTurma from './components/cardTurma/CardTurma';

function App() {
  const [materias, setMaterias] = useState([]);
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    axios.get('http://10.234.83.58:8000/api/v1/materias')
      .then(response => {
        setMaterias(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as matérias da API:', error);
      });

    axios.get('http://10.234.83.58:8000/api/v1/turmas')
      .then(response => {
        setTurmas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as turmas da API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Matérias</h1>
      <h1>{materias}</h1>
      {materias.map(materia => (
        <CardMateria
          key={materia.id}
          titulo={materia.titulo}
          responsavel={materia.responsavel}
          local={materia.local}
          semestre={materia.semestre}
          turma={materia.turma_id} 
        />
      ))}
      <h1>Lista de Turmas</h1>
      {turmas.map(turma => (
        <CardTurma
          key={turma.id}
          nome={turma.nome}
          semestre={turma.semestre}
        />
      ))}
    </div>
  );
}

export default App;
