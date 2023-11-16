import { Menu } from "../../components/Menu";
import { Sliders } from "../../components/Sliders";
import { Card } from "../../components/Cards";
// IMPORTAÇÃO DE ARQUIVOS JSON ( SERVE COMO BANCO DE DADOS )
import { homemAranha, patrulhaCanina, canecaMagica } from '../../database/canecas.json'
import { palmeiras } from '../../database/camisas.json'

const produtos = [ palmeiras, homemAranha, patrulhaCanina, canecaMagica ]

export default function Home() {
    return (
        <section className="home telas centralizar coluna">
            <Menu />

            <Sliders />

            <div className="centralizar" style={{ justifyContent: 'space-evenly', width: '70%' }}>
                {
                    produtos.map((dados) => (
                        <Card altura="200px" largura="200px" texto={dados.nome}
                            imagem={dados.foto} margin="20px"
                            funcao={() => {
                                localStorage.setItem('NomeProduto', dados.nome)
                                localStorage.setItem('FotoProduto', dados.foto)
                                localStorage.setItem('PrecoProduto', dados.preco)
                                const teste = Object.values(dados.descricao)
                                localStorage.setItem('DescricaoProduto', JSON.stringify(teste))
                            }}
                        />
                    ))
                }
            </div>

            <img src="/bg-home.png" alt="" className="background" />
        </section>
    )
}