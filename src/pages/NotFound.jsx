import { Link } from 'react-router';

function PaginaNoEncontrada() {
    return (
        <div>
            <h1>404 — Página no encontrada</h1>
            <p>La dirección que buscas no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default PaginaNoEncontrada