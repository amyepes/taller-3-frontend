import './Navbar.css'
import { Link } from 'react-router';

function Navbar() {
    return (
        <nav className='navbar'>
            <h5 className="logo">ReactAcademy</h5>

            <ul className="nav-links">
                {/*<li><a href="#inicio" className="active">Inicio</a></li>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>*/}
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/nosotros"}>Nosotros</Link></li>
                <li><Link to={"/cursos"}>Cursos</Link></li>
                <li>|</li>
                <li className='special-li'><Link to={"/login"}>Log In</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;