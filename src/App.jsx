import { Footer } from './Componentes/Footer'
import { Routes, Route} from 'react-router-dom'
import { Home2 } from './Componentes/Home2'
import { Historia } from './Componentes/Historia'
import { Missao } from './Componentes/Missao'
import { Contato } from './Componentes/Contato'
import { Header } from './Componentes/Header'
import { Produto } from './Componentes/Produto'
import './Styles.global.css'



function App() {

  return (
  
    <div>
    <Header />
    <Routes>
    <Route path='/Home2' element={<Home2 nomePagina='Home' />} />
    <Route path='/Produto' element={<Produto nomePagina='Pagina Inicial' />} />
    <Route path='/Missao' element={<Missao nomePagina='Missao' />} />
    <Route path='/Historia' element={<Historia nomePagina='Nossa Historia' />} />
    <Route path='/contato' element={<Contato nomePagina='Contato' />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
