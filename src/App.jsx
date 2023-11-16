import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Carrinho } from './pages/Carrinho' 
import Canecas from './pages/Canecas'

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/carrinho' Component={Carrinho}/>
          <Route path='/canecas' Component={Canecas}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
