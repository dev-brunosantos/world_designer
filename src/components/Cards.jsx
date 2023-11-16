import { Link } from 'react-router-dom'

export const Card = ({ imagem, texto, altura, largura, margin, funcao }) => {
    return (
        <Link to={'carrinho'} 
            className="card centralizar coluna"
            style={{
                width: largura,
                height: altura,
                marginBottom: margin
                // minHeight: altura,
                // marginBottom: margin
            }}    
            onClick={funcao}
        >
            <div className="card_img centralizar">
                <img src={imagem} alt="" />
            </div>
            <div className="card-txt centralizar" >
                <p>
                    {texto}
                </p>
            </div>
        </Link >
        
    )
}