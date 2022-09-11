import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../context/GeneralContext';
import {fetch644Poke} from '../servicesAPI/requests';


export default function SearchBar() {
  const { nameSearch, setNameSearch, setShownPokes, allPokes, setAllPokes } = useContext(GeneralContext);
  const [ actualSearch, setActualSearch ] = useState('');
  const [ selectedGen, setSelectedGen ] = useState('');
  const [ selectedType, setSelectedType ] = useState('');

  const pokeTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Mostrar todos'];
  const generations = ['Red, Green, Blue e Yellow', 'Gold, Silver e Crystal', 'Ruby, Sapphire e Emerald',
  'Diamond, Pearl e Platinum', 'Black, White, Black 2 e White 2', 'X e Y'];

  useEffect(() => {
    setSelectedGen(generations[0]);
    setSelectedType(pokeTypes[(pokeTypes.length-1)]);
    setNameSearch('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchByName = ({target}) => {
    setNameSearch(target.value);
  };
  
  const searchByType = ({ target: { name }}) => {
    setSelectedType(name);
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
    setSelectedType(pokeTypes[(pokeTypes.length-1)]);
    let data = [];
    if(name === 'Red, Green, Blue e Yellow' ){
      data = await fetch644Poke(151);
      setSelectedGen(generations[0]);
    } else if (name === 'Gold, Silver e Crystal') {
      data = await fetch644Poke(251, 152);
      setSelectedGen(generations[1]);
    } else if (name === 'Ruby, Sapphire e Emerald'){
      data = await fetch644Poke(386, 252);
      setSelectedGen(generations[2]);
    } else if (name === 'Diamond, Pearl e Platinum'){
      data = await fetch644Poke(494, 387);
      setSelectedGen(generations[3]);
    } else if (name === 'Black, White, Black 2 e White 2'){
      data = await fetch644Poke(649, 495);
      setSelectedGen(generations[4]);
    } else if (name === 'X e Y'){
      data = await fetch644Poke(721, 650);
      setSelectedGen(generations[5]);
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
        id={ selectedGen === e ? 'selected' : '' }
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
          id={ selectedType === e ? 'selected' : '' }
        >
          { e }
        </button>)) }
      </div>
      <br />
      <Link to='/favorites'>
      <button>Meus favoritos</button>
      </Link>
    </div>
  )
}
