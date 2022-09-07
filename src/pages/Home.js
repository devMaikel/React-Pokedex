import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PokeList from '../components/PokeList';
import SearchBar from '../components/SearchBar';
import GeneralContext from '../context/GeneralContext'
import getFromLocalStorage from '../helpers/getFromLocalStorage';
import '../style/home.css';

export default function Home() {
  const { isLogged, userData, setUserData } = useContext(GeneralContext);
  let navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate('/'); // se o usuário não estiver logado, volta pra tela de login
    const storageData = getFromLocalStorage(userData.user); // atualizando dados de pokemons favoritos
    setUserData( prevState => ({ ...prevState, favPokemons: storageData }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header/>
      <SearchBar/>
      <PokeList/>
    </div>
  )
}
