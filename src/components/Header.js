import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import GeneralContext from '../context/GeneralContext';

export default function Header() {
  const { userData, isLogged } = useContext(GeneralContext);

  const location = useLocation().pathname;

  return (
    <div className='header-div'>
      <h1>React Pokedex</h1>
      { isLogged && <h3> {`Usuário logado: ${userData.user}`}</h3>}
      <Link to='/'>
        { (location !== '/') && <button>Voltar a página de login</button> }
      </Link>
    </div>
  )
}
