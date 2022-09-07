import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { fetchOnePoke } from '../servicesAPI/requests';
import '../style/pokeProfile.css';

export default function PokeProfile() {
  const [pokeData, setPokeData] = useState([]);

  const location = useLocation().pathname;
  const pokeId = location.slice(16);

  const fetchPokeData = async () => {
    const data = await fetchOnePoke(pokeId);
    setPokeData(data);
  }

  useEffect(() => {
    fetchPokeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='pokeProfile-div'>
      <h1>{pokeData.name}</h1>
      <table>
        <thead>
          <tr>
            <th>HP</th>
            <th>ATTACK</th>
            <th>DEFENSE</th>
            <th>SP. ATTACK</th>
            <th>SP. DEFFENSE</th>
            <th>SPEED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {(pokeData.stats)?.map((e, index) => <td key={`${index}${e.base_stat}`}>{e.base_stat}</td>)}
          </tr>
        </tbody>
      </table>
      <h2>Sprites nos jogos de cada geração</h2>
      <div className='sprites-div'>
        <div className='sprite-div'>
          { 
            pokeData.sprites?.versions["generation-i"].yellow.front_default ? 'Sprite 1º Geração' 
              : 'Sprite não existente na primeira geração' 
          }
          {
            pokeData.sprites?.versions["generation-i"].yellow.front_default
              ? <img src={pokeData.sprites?.versions["generation-i"].yellow.front_default} alt={pokeData.name + 'gen 1'}></img>
              : <h5>Pokemon não existente na primeira geração</h5>
          }
        </div>
        <div className='sprite-div'>
          {
            pokeData.sprites?.versions["generation-ii"].crystal.front_default ? 'Sprite 2º Geração' 
              : 'Sprite não existente na segunda geração'
          }
          {
            pokeData.sprites?.versions["generation-ii"].crystal.front_default
              ? <img src={pokeData.sprites?.versions["generation-ii"].crystal.front_default} alt={pokeData.name + 'gen 1'}></img>
              : <h5>Pokemon não existente na segunda geração</h5>
          }
        </div>
        <div className='sprite-div'>
          {
            pokeData.sprites?.versions["generation-iii"].emerald.front_default ? 'Sprite 3º Geração' 
              : 'Sprite não existente na terceira geração'
          }
          {
            pokeData.sprites?.versions["generation-iii"].emerald.front_default
              ? <img src={pokeData.sprites?.versions["generation-iii"].emerald.front_default} alt={pokeData.name + 'gen 1'}></img>
              : <h5>Pokemon não existente na terceira geração</h5>
          }
        </div>
        <div className='sprite-div'>
          {
            pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default ? 'Sprite 4º Geração' 
              : 'Sprite não existente na quarta geração'
          }
          {
            pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default
              ? <img src={pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default} alt={pokeData.name + 'gen 1'}></img>
              : <h5>Pokemon não existente na quarta geração</h5>
          }
        </div>
        <div className='sprite-div'>
          {
            pokeData.sprites?.versions["generation-v"]["black-white"].front_default ? 'Sprite 5º Geração' 
              : 'Sprite não existente na quinta geração'
          }
          {
            pokeData.sprites?.versions["generation-v"]["black-white"].front_default
              ? <img src={pokeData.sprites?.versions["generation-v"]["black-white"].front_default} alt={pokeData.name + 'gen 1'}></img>
              : <h5>Sprite não existente na quinta geração</h5>
          }
        </div>
      </div>
      <div className='moves-div'>
        <h2>Golpes que esse pokemon pode possuir</h2>
        <ul>
          {pokeData.moves?.map((e) => <li key={e.move.name}>{e.move.name}</li>)}
        </ul>
      </div>
      <br/><br/><br/><br/> {/* preguiça de fazer css só pra isso xD */}
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  )
}
