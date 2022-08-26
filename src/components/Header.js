import React, { useContext } from 'react'
import GeneralContext from '../context/GeneralContext';

export default function Header() {
  const { userData, isLogged } = useContext(GeneralContext);
  return (
    <div>
      <h1>React Pokedex App</h1>
      { isLogged && <h3> {`Usuário logado: ${userData.user}`}</h3>}
    </div>
  )
}
