import './newpost.css';
import apiFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteMateria = () => {
  const navigate = useNavigate();

  const [id, setID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const deleteMateria = async (e) => {
    e.preventDefault();

    if (!id.trim()) {
      setErrorMessage('Por favor, insira um ID válido.');
      return;
    }

    try {
      await apiFetch.delete(`/materias/${id}`);
      setSuccessMessage('Materia excluída com sucesso!');
      navigate('/');
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao excluir a materia. Por favor, tente novamente.');
    }
  }

  return (
    <div className='new-post'>
      <h2>Apagar matéria por ID:</h2>
      <form onSubmit={deleteMateria}>
        <div className="form-control">
          <label htmlFor="id">ID:</label>
          <input 
            type="text" 
            name="id" 
            id="id"
            placeholder='Digite o ID' 
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
   
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <br />
        <input type="submit" value='Deletar Matéria' className='btn'/>
      </form>
    </div>
  );
};

export default DeleteMateria;
