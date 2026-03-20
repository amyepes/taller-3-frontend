import { Link } from 'react-router';
import Cursos from '../components/Cursos'

function Courses() {
    return (
        <div>
            <h1>Página Cursos</h1>
            <p>La dirección que buscas existe.</p>
            <Cursos/>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
};

export default Courses;