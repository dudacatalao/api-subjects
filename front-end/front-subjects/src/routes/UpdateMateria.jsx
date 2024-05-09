import './newpost.css';
import apiFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateMateria = () => {
  const navigate = useNavigate();

  const [id, setID] = useState('');
  const [titulo, setTitulo] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [local, setLocal] = useState('');
  const [semestre, setSemestre] = useState('');
  const [turma_id, setTurma_id] = useState('');

  const materiaData = {
    id,
    titulo,
    responsavel,
    local,
    semestre,
    turma_id
  };

  const updateMateria = async (e) =>{
    e.preventDefault();

    await apiFetch.put(`/materias/${id}`, materiaData);

    navigate('/');
  };

  return (
    <div className='new-post'>
      <h2>Atualizar Matéria:</h2>
      <form onSubmit={updateMateria}>
        <div className="form-control">
          <label htmlFor="titulo">ID:</label>
          <input 
            type="number" 
            name="id" 
            id="id"
            placeholder='Digite o ID' 
            value={id}
            onChange={(e) => setID(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="titulo">Título:</label>
          <input 
            type="text" 
            name="titulo" 
            id="titulo"
            placeholder='Digite o título' 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="responsavel">Responsável:</label>
          <input 
            type="text" 
            name="responsavel" 
            id="responsavel"
            placeholder='Digite o responsável' 
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="local">Local:</label>
          <input 
            type="text" 
            name="local" 
            id="local"
            placeholder='Digite o local' 
            value={local}
            onChange={(e) => setLocal(e.target.value)}/>
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
        <div className="form-control">
          <label htmlFor="turma_id">Turma ID:</label>
          <input 
            type="number" 
            name="turma_id" 
            id="turma_id"
            placeholder='Digite a turma ID' 
            value={turma_id}
            onChange={(e) => setTurma_id(e.target.value)}/>
        </div>
        <input type="submit" value='Atualizar Matéria' className='btn'/>
      </form>
    </div>
  );
};

export default UpdateMateria;
