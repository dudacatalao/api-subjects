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
                <Link to={'/new'} className='new-btn'>Novo Post</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
