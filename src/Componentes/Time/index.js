import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const timeBackgroundColor = { backgroundColor: props.corSecundaria };
    const timeBorderColor = { color: props.corPrimaria, borderColor: props.corPrimaria };

    return (
        props.colaboradores.length > 0
            ?
            <section className='time' style={timeBackgroundColor}>
                <h3 style={timeBorderColor}>{props.nome}</h3>

                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => {
                        return (
                            <Colaborador
                                key={colaborador.nome}
                                corPrimaria={props.corPrimaria}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem} />
                        )
                    })}
                </div>
            </section>
            :
            ''
    )
}

export default Time