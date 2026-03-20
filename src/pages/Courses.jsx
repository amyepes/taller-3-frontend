import { Link } from 'react-router';
import Cursos from '../components/Cursos'
import './Courses.css'

function Courses() {
    return (
        <main className='courses-page'>
           

            <Cursos />

            <Link className='courses-back-link' to="/">Volver al inicio</Link>
        </main>
    );
};

export default Courses;