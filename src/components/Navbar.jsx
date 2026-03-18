import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <h5 className="logo">ReactAcademy</h5>

            <ul className="nav-links">
                <li><a href="#inicio" className="active">Inicio</a></li>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;