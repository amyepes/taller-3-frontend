import { Link } from 'react-router';
import './Us.css';

function Us() {
    const team = [
        {
            name: 'Ana Torres',
            role: 'Frontend Developer',
            bio: 'Se enfoca en interfaces limpias y accesibles.'
        },
        {
            name: 'Luis Rojas',
            role: 'Backend Developer',
            bio: 'Construye APIs simples y confiables.'
        },
        {
            name: 'Camila Pérez',
            role: 'UX/UI Designer',
            bio: 'Diseña experiencias claras y centradas en el usuario.'
        }
    ];

    return (
        <section className="us-container">
            <div className="us-card">
                <h1 className="us-title">Nosotros</h1>
                <p className="us-subtitle">Este es nuestro equipo de trabajo.</p>

                <div className="team-grid">
                    {team.map((member) => (
                        <article className="team-member" key={member.name}>
                            <h2>{member.name}</h2>
                            <h3>{member.role}</h3>
                            <p>{member.bio}</p>
                        </article>
                    ))}
                </div>

                <Link className="us-back-link" to="/">Volver al inicio</Link>
            </div>
        </section>
    );
}

export default Us