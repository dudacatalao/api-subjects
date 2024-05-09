import './newpost.css';
import apiFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateTurma = () => {
  const navigate = useNavigate();

  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [semestre, setSemestre] = useState('');

  const turmaData = {
    id,
    nome,
    semestre
  };

  const updateTurma = async (e) =>{
    e.preventDefault();

    await apiFetch.put(`/turmas/${id}`, turmaData);

    navigate('/');
  }

  return (
    <div className='new-post'>
      <h2>Atualizar turma:</h2>
      <form onSubmit={updateTurma}>
        
        <div className="form-control">
          <label htmlFor="nome">ID:</label>
          <input 
            type="number" 
            name="id" 
            id="id"
            placeholder='Digite o ID' 
            value={id}
            onChange={(e) => setID(e.target.value)}/>
        </div>

        <div className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            name="nome" 
            id="nome"
            placeholder='Digite o nome' 
            value={nome}
            onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="semestre">Semestre:</label>
          <input 
            type="text" 
            name="semestre" 
            id="semestre"
            placeholder='Digite o semestre' 
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}/>
        </div>
        <input type="submit" value='Atualizar Turma' className='btn'/>
      </form>
    </div>
  );
};

export default UpdateTurma;
