import Card from './Card'
import './Cursos.css'

function Cursos() {
    return (
        <section id='cursos'>
            <h2>Nuestros Cursos</h2>
            <p>Elige el camino que mejor se adapte a ti</p>
            <div className='tarjetas'>
                <Card icon='⚛️' titulo="React Básico" texto='Componentes, props, estado y eventos. Todo lo que necesitas para empezar.' boton='Principiante' />
                <Card icon='🔄' titulo='React Hooks' texto='Profundiza en useState, useEffect y crea tus propios custom hooks.' />
                <Card icon='📁' titulo='Estado Global' texto='Gestiona el estado con Context API y aprende cuándo usarlo.' />
                <Card icon='🚀' titulo='React Avanzado' texto='Rendimiento, patrones avanzados y arquitectura para proyectos grandes.' boton='Avanzado' />
            </div>
        </section>
    );
}

export default Cursos;