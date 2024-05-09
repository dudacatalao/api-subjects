import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import './home.css'
import apiFetch from "../axios/config"

const Home = () => {
  const [turmas, setTurmas] = useState([])
  const [materias, setMaterias] = useState([])

  const getTurmas = async() =>{
    try {
      const response = await apiFetch.get("/turmas/")

      const data = response.data
      setTurmas(data)

    } catch (error) {
      console.log(error)
    }
  }

  const getMaterias = async() =>{
    try {
      const response = await apiFetch.get("/materias/")

      const data = response.data
      setMaterias(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMaterias();
    getTurmas()
  }, [])

  return (
    <>
      <div className="home">
          <h1>Ultimas Matérias</h1>
          {materias.length === 0 ? (<p>Carregando</p>) : (
            materias.map((materia) => (
              <div className="post" key={materia.id}>
                <h2>{materia.titulo}</h2>
                <p><b>Responsável: </b> {materia.responsavel}</p>
                <p><b>Local: </b>{materia.local}</p>
                <p><b>Semestre: </b>{materia.semestre}</p>
                <p><b>ID Turma: </b>{materia.turma_id}</p>
                {/* <Link to={`/posts/${materia.id}`} className="btn">Ler mais</Link> */}
              </div>
            ))
          )}
      </div>

      <div className="home">
          <h1>Ultimas Turmas</h1>
          {turmas.length === 0 ? (<p>Carregando</p>) : (
            turmas.map((turma) => (
              <div className="post" key={turma.id}>
                <h2>{turma.nome}</h2>
                <p><b>Semestre: </b>{turma.semestre}</p>
                {/* <Link to={`/posts/${turma.id}`} className="btn">Ler mais</Link> */}
              </div>
            ))
          )}
      </div>
    </>
  )
}

export default Home
