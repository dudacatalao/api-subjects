import './newpost.css'
import apiFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewMateria = () => {
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState()
  const [responsavel, setResponsavel] = useState()
  const [local, setLocal] = useState()
  const [semestre, setSemestre] = useState()
  const [turma_id, setTurma_id] = useState()

  const createPost = async (e) =>{
    e.preventDefault()

    const post = [titulo, responsavel, local, semestre, turma_id];

    await apiFetch.post('/materias', {
      body:post
    })

    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>Inserir new Materia:</h2>
      <form action="" onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            name="title" 
            id="title"
            placeholder='Digite o título' 
            onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="body">Responsável:</label>
          <textarea 
            name='body'
            id='body' 
            placeholder='Digite o responsável'
            onChange={(e) => setResponsavel(e.target.value)}
            ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="body">Local:</label>
          <textarea 
            name='body'
            id='body' 
            placeholder='Digite o local'
            onChange={(e) => setLocal(e.target.value)}
            ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="body">Semestre:</label>
          <textarea 
            name='body'
            id='body' 
            placeholder='Digite o semestre'
            onChange={(e) => setSemestre(e.target.value)}
            ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="body">Turma ID:</label>
          <textarea 
            name='body'
            id='body' 
            placeholder='Digite a turma'
            onChange={(e) => setTurma_id(e.target.value)}
            ></textarea>
        </div>
        <input type="submit" value='Criar Turma' className='btn' />
      </form>
    </div>
  )
}

export default NewMateria
