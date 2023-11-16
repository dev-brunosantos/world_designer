import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BsCart4, BsWhatsapp, BsFillArrowLeftCircleFill } from 'react-icons/bs'

import { MenuCarrinho } from "../../components/MenuCarrinho";
import { Card } from "../../components/Cards";

// IMPORTAÇÃO DAS INFORMAÇÕES QUE ESTÃO EM JSON
import { homemAranha } from '../../../produtos.json'

export function Carrinho() {

    const nomeProduto = localStorage.getItem('NomeProduto')
    const fotoProduto = localStorage.getItem('FotoProduto')
    const precoProduto = localStorage.getItem('PrecoProduto')
    const descricaoProduto = JSON.parse(localStorage.getItem('DescricaoProduto'))

    const [contador, setContador] = useState(0)
    const [verContador, setVerContador] = useState('none')

    return (
        <section className="carrinho telas centralizar" style={{ justifyContent: 'center' }}>
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

            <div className="container_carrinho coluna">
                <Card
                    largura="100px"
                    altura="100px"
                    imagem={fotoProduto}
                    margin="20px"
                />
                <Card
                    largura="100px"
                    altura="100px"
                    imagem={fotoProduto}
                    margin="20px"
                />
                <Card
                    largura="100px"
                    altura="100px"
                    imagem={fotoProduto}
                    margin="20px"
                />
            </div>

            <div className="carrinho_produto centralizar">
                {/* FOTO DO PRODUTO */}
                <div className="carrinho_item centralizar coluna">
                    <img src={fotoProduto} alt="" />

                    <button onClick={() => {
                        setContador(contador + 1)
                        if (contador > 0) {
                            return setVerContador('flex')
                        }
                        return setVerContador('none')
                    }}>
                        Adicionar ao Carrinho
                    </button>
                </div>
                {/* DADOS DO PRODUTO */}
                <div className="carrinho_pagamento centralizar coluna">

                    <div className='centralizar' style={{ position: 'relative' }}>
                        <h2 className='centralizar' style={{
                            justifyContent: 'center',
                            position: 'absolute',
                            top: '-15px',
                            right: 0,
                            color: 'var(--branco)',
                            width: '30px',
                            height: '30px',
                            border: 'solid transparent',
                            borderRadius: '50%',
                            backgroundColor: 'var(--rosa)',
                            display: verContador
                        }}>
                            {contador}
                        </h2>
                        <BsCart4 size={80} />
                    </div>

                    <div className="carrinho_informacao">
                        <h1> {nomeProduto} </h1>
                        <ul className='centralizar coluna'>
                            {
                                descricaoProduto.map(dado => (
                                    <li>{dado}</li>
                                ))
                            }
                        </ul>
                        <div className='centralizar' style={{ width: '100%', justifyContent: 'space-between' }}>
                            <h2>
                                R$ {precoProduto*contador},00
                            </h2>
                        </div>
                    </div>
                </div>

            </div>

            <BsWhatsapp
                style={{
                    color: "#fff",
                    borderRadius: '50%',
                    padding: '5px',
                    backgroundColor: 'green',
                    position: 'fixed',
                    bottom: '2rem',
                    right: '5rem'
                }}
                size={40}
            />

            <img src="/bg-carrinho.png" alt="" className="background" />
        </section>
    )
}