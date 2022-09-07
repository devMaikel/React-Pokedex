import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../context/GeneralContext';
import getFromLocalStorage from '../helpers/getFromLocalStorage';
import setToLocalStorage from '../helpers/setToLocalStorage';
import '../style/pokeCard.css';

export default function PokeCard({name, index, sprite, abilities, types, status}) {
  const { userData, setUserData } = useContext(GeneralContext);

  const addToFavorites = () => {
    const prevStorage = getFromLocalStorage(userData.user);
    if(prevStorage){
      prevStorage.some((e) => e.name === name) 
        ? setToLocalStorage(userData.user, prevStorage.filter((e) => e.name !== name))
        : setToLocalStorage(userData.user, [...prevStorage, { name, index, sprite, abilities, types, status }]);
    } else {
      setToLocalStorage(userData.user, [{ name, index, sprite, abilities, types, status }]);
    }
    const storageData = getFromLocalStorage(userData.user);
    setUserData( prevState => ({ ...prevState, favPokemons: storageData }));
  }

  return (
      <div className='poke-card'>
        <h5 className='poke-name'>{`#${index} ${name}`}</h5>
        <img 
          src={ sprite }
          alt={ name }
          width="150"
        />
        <br/>
        <h5>ABILITIES</h5>
        <ul>
          { abilities.map((e) => <li key={e.ability.name}>{e.ability.name}</li>) }
          { abilities.length < 2 && <li>-</li> }
          { abilities.length < 3 && <li>-</li> }
        </ul>
        <h5>TYPE</h5>
        <ul>
          { types.map((e) => <li key={e.type.name}>{e.type.name}</li>) }
          { types.length < 2 && <li>-</li> }
        </ul>
        <h5>BASE STATUS</h5>
        <table>
          <thead>
            <tr>
              <th>HP</th>
              <th>ATK</th>
              <th>DEF</th>
              <th>SP. ATK</th>
              <th>SP. DEF</th>
              <th>SPD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {status.map((e, index) => <td key={`${index}${e.stat.name}`}>{e.base_stat}</td>)}
            </tr>
          </tbody>
        </table>
        <div className='buttons-div'>
          <Link to= {`/pokemonProfile/${name}`}>
            <button>Detalhes</button>
          </Link>
          { 
          userData.favPokemons ? 
            userData.favPokemons.some((e) => e.name === name)
              ? <button onClick={ addToFavorites }>Desfavoritar</button>
              : <button onClick={ addToFavorites }>Favoritar</button>
            : <button onClick={ addToFavorites }>Favoritar</button>
          }
          
        </div>
      </div>
    
  )
}
