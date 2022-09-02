import React, { useContext, useState } from 'react';
import GeneralContext from '../context/GeneralContext';
import {fetch644Poke} from '../servicesAPI/requests';


export default function SearchBar() {
  const { nameSearch, setNameSearch, setShownPokes, allPokes, setAllPokes } = useContext(GeneralContext);
  const [ actualSearch, setActualSearch ] = useState('');

  const pokeTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Mostrar todos'];
  const generations = ['Red, Green, Blue e Yellow', 'Gold, Silver e Crystal', 'Ruby, Sapphire e Emerald',
  'Diamond, Pearl e Platinum', 'Black, White, Black 2 e White 2', 'X e Y'];

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

  const selectGeneration = async ({ target: { name }}) => {
    let data = [];
    if(name === 'Red, Green, Blue e Yellow' ){
      data = await fetch644Poke(151);
    } else if (name === 'Gold, Silver e Crystal') {
      data = await fetch644Poke(251, 152);
    } else if (name === 'Ruby, Sapphire e Emerald'){
      data = await fetch644Poke(386, 252);
    } else if (name === 'Diamond, Pearl e Platinum'){
      data = await fetch644Poke(494, 387);
    } else if (name === 'Black, White, Black 2 e White 2'){
      data = await fetch644Poke(649, 495);
    } else if (name === 'X e Y'){
      data = await fetch644Poke(721, 650);
    } 
    setAllPokes(data);
    setShownPokes(data);
    setNameSearch('');
    setActualSearch('');
  };

  return (
    <div className='searchbar-div'>
      <h2>Selecione qual geração deseja que seja mostrada</h2>
      <div className='generation-buttons'>
        { generations.map((e) => (<button 
        type='button'
        key={ e }
        name={ e }
        onClick= { (event) => selectGeneration(event) }
        >
          { e }
        </button>))}
      </div>
      <h3>Pesquisar Pokemon por nome</h3>
      <input 
        type="text" 
        placeholder="Digite para pesquisar"
        value={ nameSearch }
        onChange={ searchByName }
      />
      <br />
      <h3>Pesquisar pokemons por tipo</h3>
      <div className='generation-buttons'>
        { pokeTypes.map((e, index) => (<button 
          key={ e }
          type='button'
          name={ e }
          onClick= {(event) => searchByType(event)}
        >
          { e }
        </button>)) }
      </div>
    </div>
  )
}
