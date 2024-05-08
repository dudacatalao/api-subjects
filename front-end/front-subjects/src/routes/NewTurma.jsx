import './newpost.css'
import apiFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewTurma = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState()
  const [semestre, setSemestre] = useState()

  const createPost = async (e) =>{
    e.preventDefault()

    const post = [nome, semestre];

    await apiFetch.post('/turmas', {
      body:post
    })

    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>Inserir new turma:</h2>
      <form action="" onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Nome:</label>
          <input 
            type="text" 
            name="title" 
            id="title"
            placeholder='Digite o nome' 
            onChange={(e) => setNome(e.target.value)}/>
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
        <input type="submit" value='Criar Turma' className='btn' />
      </form>
    </div>
  )
}

export default NewTurma
