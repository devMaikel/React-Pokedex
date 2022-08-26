import React, { useState } from 'react'
import PropTypes from 'prop-types';
import GeneralContext from './GeneralContext';

export default function GeneralProvider( { children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [allPokes, setAllPokes] = useState([]);
  const [userData, setUserData] = useState({ 
    user: '',
    favPokemons: [],
    showPokemons: 45,
  });
  const [nameSearch, setNameSearch] = useState('');
  const [shownPokes, setShownPokes] = useState([]);

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
      } }
    >
      { children }
    </GeneralContext.Provider>
  );
}

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
