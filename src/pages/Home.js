import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PokeList from '../components/PokeList';
import SearchBar from '../components/SearchBar';
import GeneralContext from '../context/GeneralContext'

export default function Home() {
  const { isLogged } = useContext(GeneralContext);
  let navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate('/'); // se o usuário não estiver logado, volta pra tela de login
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header/>
      <h2>Home</h2>
      <SearchBar/>
      <PokeList/>
    </div>
  )
}
