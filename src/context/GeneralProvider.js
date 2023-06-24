import React, { useState } from 'react'
import PropTypes from 'prop-types';
import GeneralContext from './GeneralContext';

export default function GeneralProvider( { children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [allPokes, setAllPokes] = useState([]);
  const [userData, setUserData] = useState({ 
    user: '',
    favPokemons: [],
    showPokemons: '',
  });
  const [nameSearch, setNameSearch] = useState('');
  const [shownPokes, setShownPokes] = useState([]);
  const [shownPokesNumber, setShownPokesNumber] = useState(30);

  return (
    <GeneralContext.Provider
      value={ {
        isLogged,
        setIsLogged,
        userData,
        setUserData,
        allPokes, 
        setAllPokes,
        nameSearch, 
        setNameSearch,
        shownPokes, 
        setShownPokes,
        shownPokesNumber,
        setShownPokesNumber,
      } }
    >
      { children }
    </GeneralContext.Provider>
  );
}

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
