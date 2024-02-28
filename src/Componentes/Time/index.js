import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    const timeBorderColor = { borderColor: time.cor };

    return (
        colaboradores.length > 0
            ?
            <section
                className='time'
                style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.4') }}
            >
                <input
                    value={time.cor}
                    type='color'
                    className='input-cor'
                    onChange={evento => mudarCor(time.id, evento.target.value)}
                />

                <h3 style={timeBorderColor}>{time.nome}</h3>

                <div className='colaboradores'>
                    {colaboradores.map(colaborador => {
                        return (
                            <Colaborador
                                key={colaborador.nome}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />
                        )
                    })}
                </div>
            </section>
            :
            ''
    )
}

export default Time