import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>
            <Link to={'/'}>Api matérias SENAI e BOSCH</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/novaturma'} className='new-btn'>Nova Turma</Link>
                <Link to={'/novamateria'} className='new-btn'>Nova Matéria</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
