import './Card.css'

function Card({ icon, titulo = 'insert title', texto = 'esperando texto.', boton = 'Intermedio' }) {
    return (
        <>
            <div className='card'>
                <div className='icon'>{icon}</div>
                <h4>{titulo}</h4>
                <p>{texto}</p>
                <button>{boton}</button>
            </div>
        </>
    )
}

export default Card;