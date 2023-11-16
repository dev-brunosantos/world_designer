import { useState } from 'react'
// IMPORTAÇÃO DOS ICONES PARA O MENU
import { GrMenu, GrClose } from 'react-icons/gr'
import { ImMug } from 'react-icons/im'
import { GiKeyring } from 'react-icons/gi'
import { BiSolidTShirt } from 'react-icons/bi'
import { FaBook } from 'react-icons/fa'
import { RiHandbagLine } from 'react-icons/ri'

export const MenuCarrinho = () => {

    const [abrirMenu, setAbrirMenu] = useState(<GrMenu style={{ fontSize: 35 }} />)
    const [fecharMenu, setFecharMenu] = useState(<GrClose style={{ fontSize: 35 }} />)

    function Menu() {
        setAbrirMenu(fecharMenu)
        setFecharMenu(abrirMenu)
    }

    return (
        <header className="cabecalhoCarrinho">
            <nav className="menu_principal centralizar">
                <div className="menu_logo centralizar">
                    <img src={'/logo-menu.png'} alt="" />
                </div>

                <ul className='menu_itens centralizar' style={{height: '45px'}}>
                    <li className='menu centralizar'>
                        <ImMug className='menu-icones' />
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