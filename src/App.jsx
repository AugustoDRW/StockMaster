import { useState } from 'react'
import './App.css'
import { GoGear } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { FiCodesandbox } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Usuarios from './Pages/Usuarios';
import Estoque from './Pages/Estoque';
import Funcoes from './Pages/Funcoes';
import Relatorios from './Pages/Relatórios';

function App() {
  const [pageCount, setPageCount] = useState(0)

  const renderPage = () => {
    switch (pageCount) {
      case 0:
        return <Home />;
      case 1:
        return <Produtos />;
      case 2:
        return <Estoque />;
      case 3:
        return <Usuarios />;
      case 4:
        return <Funcoes />;
      case 5:
        return <Relatorios />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='MainPage'>
      <span>
        <header>
          <nav>
            <a href="#" className='Logo' onClick={() => { setPageCount(0) }}><FiCodesandbox className='LogoIcon' /> StockMaster</a>
            <span>
              <a href="#"><HiBell className='Icon' /></a>
              <a href="#"><HiOutlineUser className='Icon Perfil' /></a>
            </span>
          </nav>
        </header>

        <main className={pageCount !== 0 ? 'mainHidden' : ''}>
          <span>
            <div className='Card'>
              <h3>StockMaster</h3>
              <h4>seja bem vindo!</h4>
            </div>
          </span>
        </main>
        <nav className='NavPages'>
          <a onClick={() => { setPageCount(1) }}>Produtos</a>
          <a onClick={() => { setPageCount(2) }}>estoque</a>
          <a onClick={() => { setPageCount(3) }}>Usuários</a>
          <a onClick={() => { setPageCount(4) }}>funcões</a>
          <a onClick={() => { setPageCount(5) }}>Relatorios</a>
        </nav>

        <section className='Page'>
          {renderPage()}
        </section>
      </span>

      <footer>
        <div>
          <p>Termos de uso</p>
          <p>Acessibilidade</p>
          <p>Privacidade</p>
          <p>FAQs</p>
        </div>
        <a href="#" className='Info'><HiOutlineInformationCircle />
          info</a>
      </footer>
    </div>
  )
}

export default App
