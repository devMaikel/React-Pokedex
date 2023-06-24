import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../context/GeneralContext';
import {fetch644Poke} from '../servicesAPI/requests';
import Loading from './Loading';


export default function SearchBar() {
  const { 
    nameSearch, 
    setNameSearch, 
    setShownPokes, 
    allPokes, 
    setAllPokes, 
    userData,
    setShownPokesNumber,
  } = useContext(GeneralContext);
  const [ actualSearch, setActualSearch ] = useState('');
  const [ selectedGen, setSelectedGen ] = useState('');
  const [ selectedType, setSelectedType ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  // const [ selectedAtt, setSelectedAtt ] = useState(''); funcionalidade não implementada

  const pokeTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Mostrar todos'];
  const generations = ['Red, Green, Blue e Yellow', 'Gold, Silver e Crystal', 'Ruby, Sapphire e Emerald',
  'Diamond, Pearl e Platinum', 'Black, White, Black 2 e White 2', 'X e Y'];
  // const attributes = ['HP', 'ATK', 'DEF', 'SP. ATK', 'SP. DEF', 'SPD'];

  useEffect(() => {
    setSelectedGen(generations[0]);
    setSelectedType(pokeTypes[(pokeTypes.length-1)]);
    setNameSearch('');
    // setSelectedAtt('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchByName = ({target}) => {
    setNameSearch((target.value));
  };

  const selectGeneration = async ({ target: { name }}) => {
    setIsLoading(true);
    setSelectedType(pokeTypes[(pokeTypes.length-1)]);
    setShownPokesNumber(30);
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
    setIsLoading(false);
  };

  const searchByType = ({ target: { name }}) => {
    if (name === 'Mostrar todos' || name === actualSearch) {
      setShownPokes(allPokes);
      setNameSearch('');
      setSelectedType('Mostrar todos');
      setActualSearch('Mostrar todos');
    } else if (name !== actualSearch && name !== 'Mostrar todos') {
      setActualSearch(name);
      setSelectedType(name);
      const searchResult = allPokes.filter((e) => (e.data.types).some((ee) => ee.type.name === name.toLowerCase()));
      setShownPokes(searchResult);
      setNameSearch('');
    }
  };

  // const searchByAtt = ({ target: { name }}, index) => { // funcionalidade não implementada
  //   if (name === selectedAtt) {
  //     if (selectedType !== '') {
  //       const searchResult = allPokes.filter((e) => (e.data.types).some((ee) => ee.type.name === selectedType.toLowerCase()));
  //       setShownPokes(searchResult);
  //       setSelectedAtt('');
  //     } else {
  //       setShownPokes(allPokes);
  //       setSelectedAtt('');
  //     }
  //   } else {
  //     const sortResult = allPokes.sort(function (a, b) {
  //       if (a.data.stats[index].base_stat < b.data.stats[index].base_stat) return 1
  //       if (a.data.stats[index].base_stat > b.data.stats[index].base_stat) return -1
  //       return 0
  //     })
  //     setShownPokes(sortResult);
  //     setSelectedAtt(name);
  //     setNameSearch('');
  //   }
  // };

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
      <br />
      { isLoading && <Loading name='empty'/>}
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
        { pokeTypes.map((e) => (<button 
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
      {/* <div> // não implementado
        <h3>Ordenar pokemons por maiores atributos</h3>
        { attributes.map((e, index) => (<button 
          key={ e }
          type='button'
          name={ e }
          onClick= {(event) => searchByAtt(event, index)}
          id={ selectedType === e ? 'selected' : '' }
        >
          { e }
        </button>)) }
      </div>
      <br /> */}
      {!(userData.favPokemons === null || userData.favPokemons?.length === 0) ? (<Link to='/favorites'>
        <button>Meus favoritos</button></Link>)
        : (<button disabled={ true }>Meus favoritos ~Vazio~</button>)}
    </div>
  )
}
