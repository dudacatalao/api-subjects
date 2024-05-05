import React from 'react'
import './newpost.css'
import apiFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) =>{
    e.preventDefault()

    const post = [title, body];

    await apiFetch.post('/posts', {
      body:post
    })

    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>Inserir new post:</h2>
      <form action="" onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            name="title" 
            id="title"
            placeholder='Digite o título' 
            onChange={() => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
            name='body'
            id='body' 
            placeholder='Digite o conteúdo'
            onChange={() => setBody(e.target.value)}
            ></textarea>
        </div>
        <input type="submit" value='Criar Post' className='btn' />
      </form>
    </div>
  )
}

export default NewPost
