import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import { Card } from '../../components/Cards'
import { MenuCarrinho } from '../../components/MenuCarrinho'
import { homemAranha, patrulhaCanina, canecaMagica } from '../../database/canecas.json'
const canecas = [homemAranha, patrulhaCanina, canecaMagica]

export default function Cenecas() {
    return (
        <section className='canecas telas centralizar coluna' style={{ justifyContent: 'center' }}>
            <MenuCarrinho />

            <Link to={'/'}>
                <BsFillArrowLeftCircleFill style={{
                    position: 'absolute',
                    top: '8%',
                    left: '3.5%',
                    fontSize: 50,
                    color: 'var(--rosa)',
                    backgroundColor: 'var(--branco)',
                    borderRadius: '50%'
                }} />
            </Link>

            <main style={{ overflowY: 'auto', paddingTop: '8rem', width: '70%' }}>
                <div className="centralizar" style={{ justifyContent: 'space-evenly', width: '70%' }}>
                    {
                        canecas.map((dados) => (
                            <Card altura="200px" largura="200px" texto={dados.nome}
                                imagem={dados.foto} margin="20px"
                                funcao={() => {
                                    localStorage.setItem('Teste1', dados.nome)
                                    localStorage.setItem('Teste2', dados.foto)
                                    localStorage.setItem('Teste3', dados.preco)
                                }}
                            />
                        ))
                    }
                </div>

                <div className="centralizar" style={{ justifyContent: 'space-evenly', width: '70%' }}>
                    {
                        canecas.map((dados) => (
                            <Card altura="200px" largura="200px" texto={dados.nome}
                                imagem={dados.foto} margin="20px"
                                funcao={() => {
                                    localStorage.setItem('Teste1', dados.nome)
                                    localStorage.setItem('Teste2', dados.foto)
                                    localStorage.setItem('Teste3', dados.descricao.preco)
                                    localStorage.setItem("Teste4", dados.fotos)
                                }}
                            />
                        ))
                    }
                </div>

                <div className="centralizar" style={{ justifyContent: 'space-evenly', width: '70%' }}>
                    {
                        canecas.map((dados) => (
                            <Card altura="200px" largura="200px" texto={dados.nome}
                                imagem={dados.foto} margin="20px"
                                funcao={() => {
                                    localStorage.setItem('Teste1', dados.nome)
                                    localStorage.setItem('Teste2', dados.foto)
                                    localStorage.setItem('Teste3', dados.descricao.preco)
                                    localStorage.setItem("Teste4", dados.fotos)
                                }}
                            />
                        ))
                    }
                </div>

                <div className="centralizar" style={{ justifyContent: 'space-evenly', width: '70%' }}>
                    {
                        canecas.map((dados) => (
                            <Card altura="200px" largura="200px" texto={dados.nome}
                                imagem={dados.foto} margin="20px"
                                funcao={() => {
                                    localStorage.setItem('Teste1', dados.nome)
                                    localStorage.setItem('Teste2', dados.foto)
                                    localStorage.setItem('Teste3', dados.descricao.preco)
                                    localStorage.setItem("Teste4", dados.fotos)
                                }}
                            />
                        ))
                    }
                </div>
            </main>


            <img src="/bg-carrinho.png" alt="" className="background" style={{ position: 'fixed', top: '0', width: '100%', zIndex: '-1' }} />
        </section>
    )
}