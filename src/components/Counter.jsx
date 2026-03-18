import { useState } from 'react';
import './Counter.css'

function Counter() {

    const [cuenta, setCuenta] = useState(0);

    function incrementar() {
        setCuenta(cuenta + 1);
    }

    function decrementar() {
        setCuenta(cuenta - 1);
    }

    return (
        <section id='nosotros'>
            <h2>Cuántos estudiantes van a inscribirse?</h2>
            <p>Usa los botones para ajustar el número</p>
            <div className='counterDiv'>
                <button onClick={decrementar}>-</button>
                <span>{cuenta}</span>
                <button onClick={incrementar}>+</button>
            </div>
            <p>estudiantes inscritos</p>
        </section>
    );
}

export default Counter;