import './Hero.css'

function Hero() {
    return (
        <section id="inicio" className='hero'>
            <h1>Aprende <span>React</span> desde cero</h1>
            <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
            <a href='#cursos'>
                <button>Ver Cursos</button>
            </a>
        </section>
    );
}

export default Hero;