import { Link } from 'react-router';

function Login() {
    return (
        <div>
            <h1>Página Login</h1>
            <p>La dirección que buscas existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default Login