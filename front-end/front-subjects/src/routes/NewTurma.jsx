import './newpost.css';
import apiFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTurma = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [semestre, setSemestre] = useState('');

  const turmaData = {
    nome,
    semestre
  };

  const createPost = async (e) =>{
    e.preventDefault();

    await apiFetch.post('/turmas/', turmaData);

    navigate('/');
  }

  return (
    <div className='new-post'>
      <h2>Inserir nova turma:</h2>
      <form onSubmit={createPost}>
        
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
        <input type="submit" value='Criar Turma' className='btn'/>
      </form>
    </div>
  );
};

export default NewTurma;
