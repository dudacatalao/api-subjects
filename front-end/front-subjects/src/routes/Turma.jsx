import './home.css'
import {Link} from 'react-router-dom'

export default function Turma(){
  return(<>
    <section>
      <h2>
        Escolha o método
      </h2>
      <ul>
        <li>
          <Link to={'/novaturma'} className='new-btn'>Nova Turma</Link>
        </li>
        <li>
          <Link to={'/novamateria'} className='new-btn'>Nova Matéria</Link>
        </li>
        <li>
          <Link to={'/updateturma'} className='new-btn'>Atualizar Turma</Link>
        </li>
        <li>
          <Link to={'/deleteturma'} className='new-btn'>Delete Turma</Link>
        </li>
      </ul>
    </section>
  </>)
}