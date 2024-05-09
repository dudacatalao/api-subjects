import './newpost.css';
import apiFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteTurma = () => {
  const navigate = useNavigate();

  const [id, setID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const deleteTurma = async (e) => {
    e.preventDefault();

    if (!id.trim()) {
      setErrorMessage('Por favor, insira um ID válido.');
      return;
    }

    try {
      await apiFetch.delete(`/turmas/${id}`);
      setSuccessMessage('Turma excluída com sucesso!');
      navigate('/');
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao excluir a turma. Por favor, tente novamente.');
    }
  }

  return (
    <div className='new-post'>
      <h2>Apagar turma por ID:</h2>
      <form onSubmit={deleteTurma}>
        <div className="form-control">
          <label htmlFor="nome">ID:</label>
          <input 
            type="text" 
            name="nome" 
            id="nome"
            placeholder='Digite o ID' 
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
   
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <br />
        <input type="submit" value='Deletar Turma' className='btn'/>
      </form>
    </div>
  );
};

export default DeleteTurma;
