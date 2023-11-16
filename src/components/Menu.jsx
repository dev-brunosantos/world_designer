import { useState } from 'react'
import { Link } from 'react-router-dom'
// ICONES
import { GrMenu, GrClose } from 'react-icons/gr'
import { ImMug } from 'react-icons/im'
import { GiKeyring } from 'react-icons/gi'
import { BiSolidTShirt } from 'react-icons/bi'
import { FaBook } from 'react-icons/fa'
import { RiHandbagLine } from 'react-icons/ri'


export const Menu = () => {

    const [abrirMenu, setAbrirMenu] = useState(<GrMenu style={{ fontSize: 35 }} />)
    const [fecharMenu, setFecharMenu] = useState(<GrClose style={{ fontSize: 35 }} />)
    const [animacao, setAnimacao] = useState("45px")

    function Menu() {
        setAbrirMenu(fecharMenu)
        setFecharMenu(abrirMenu)
    }

    window.addEventListener('scroll', animarCategoria)
    function animarCategoria() {
        if (pageYOffset > 50 && pageXOffset < 51) {
            return setAnimacao("0px")
        }
        return setAnimacao("45px")
    }

    return (
        <header className="cabecalho">
            <nav className="menu_principal centralizar coluna">
                <div className="menu_logo centralizar">
                    <img src={'/logo-menu.png'} alt="" />

                    <h1 className='centralizar'>transformando arte em designer</h1>
                </div>

                <ul className='menu_itens centralizar' style={{ height: animacao }}>
                    <li className='menu centralizar'>
                        <Link to={'/canecas'}>
                            <ImMug className='menu-icones' />
                        </Link>
                    </li>
                    <li className="menu centralizar">
                        <GiKeyring className='menu-icones' />
                    </li>
                    <li className="menu centralizar">
                        <BiSolidTShirt className='menu-icones' />
                    </li>
                    <li className="menu centralizar">
                        <FaBook className='menu-icones' />
                    </li>
                    <li className="menu centralizar">
                        <RiHandbagLine className='menu-icones' />
                    </li>

                    <button style={{ border: 'none' }} onClick={Menu}>
                        {abrirMenu}
                    </button>
                </ul>
            </nav>
            {/* <img src="/bg-home.png" alt="" className="cabecalho_background"/> */}
        </header>
    )
}