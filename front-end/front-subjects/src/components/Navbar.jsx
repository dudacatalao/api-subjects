import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* <h2>
            <Link to={'/'}>Api matérias SENAI e BOSCH</Link>
        </h2> */}
        <ul>
            <li>
                <Link to={'/novaturma'} className='new-btn'>Nova Turma</Link>
            </li>
            <li>
              <Link to={'/updateturma'} className='new-btn'>Atualizar Turma</Link>
            </li>
            <li>
              <Link to={'/deleteturma'} className='new-btn'>Delete Turma</Link>
            </li>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/novamateria'} className='new-btn'>Nova Matéria</Link>
            </li>
            <li>
              <Link to={'/updatemateria'} className='new-btn'>Atualizar Matéria</Link>
            </li>
            <li>
              <Link to={'/deletemateria'} className='new-btn'>Delete Matéria</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
