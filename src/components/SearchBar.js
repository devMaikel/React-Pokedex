import React, { useContext, useState } from 'react'
import GeneralContext from '../context/GeneralContext'

export default function SearchBar() {
  const { nameSearch, setNameSearch, shownPokes, setShownPokes, allPokes } = useContext(GeneralContext);
  const [ actualSearch, setActualSearch ] = useState('');

  const pokeTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Mostrar todos'];

  const searchByName = ({target}) => {
    setNameSearch(target.value);
  };

  const searchByType = ({ target: { name }}) => {
    if (name === 'Mostrar todos' || name === actualSearch){
      setActualSearch(name);
      setShownPokes(allPokes);
      setNameSearch('');
    } else if (name !== actualSearch && name !== 'Mostrar todos') {
      setActualSearch(name);
      const searchResult = allPokes.filter((e) => (e.data.types).some((ee) => ee.type.name === name.toLowerCase()));
      setShownPokes(searchResult);
      setNameSearch('');
    }

  };

  return (
    <div>
      <h3>Pesquisar Pokemon por nome</h3>
      <input 
        type="text" 
        placeholder="Digite para pesquisar"
        value={ nameSearch }
        onChange={ searchByName }
      />
      <br />
      <h3>Pesquisar pokemons por tipo</h3>
      { pokeTypes.map((e, index) => (<button 
        key={ e }
        type='button'
        name={ e }
        onClick= {(event) => searchByType(event)}
      >
        { e }
      </button>)) }
    </div>
  )
}
