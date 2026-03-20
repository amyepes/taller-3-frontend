import './Hero.css'
import { Link } from 'react-router'

function Hero() {
    return (
        <section id="inicio" className='hero'>
            <h1>Aprende <span>React</span> desde cero</h1>
            <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
            <Link to={"/cursos"}>
                <button>Ver Cursos</button>
            </Link>
        </section>
    );
}

export default Hero;