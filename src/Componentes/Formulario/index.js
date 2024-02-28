import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ times, aoColaboradorCadastrado, cadastrarTime }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()

        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>

                <Campo
                    label="Nome"
                    placeholder="Digite o Nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    label="Cargo"
                    placeholder="Digite o Cargo"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    label="Times"
                    itens={times}
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form className='formulario' onSubmit={evento => {
                evento.preventDefault();
                cadastrarTime({
                    nome: nomeTime,
                    cor: corTime
                });
            }}>
                <h2>Preencha os dados para criar um novo time:</h2>

                <Campo
                    label="Nome"
                    placeholder="Digite o Nome do Time"
                    obrigatorio
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    label="Cor"
                    type='color'
                    placeholder="Digite a Cor do Time"
                    obrigatorio
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />

                <Botao>
                    Criar um novo Time
                </Botao>
            </form>
        </section >
    )
}

export default Formulario