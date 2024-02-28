import './Campo.css'

const Campo = ({ type = 'text', label, valor, placeholder, obrigatorio = false, aoAlterado }) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                value={valor}
                type={type}
                placeholder={placeholder}
                required={obrigatorio}
                onChange={aoDigitado}
            />
        </div>
    )
}

export default Campo