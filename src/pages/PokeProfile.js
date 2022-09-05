import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchOnePoke } from '../servicesAPI/requests';

export default function PokeProfile() {
  const [pokeData, setPokeData] = useState([]);

  const location = useLocation().pathname;
  const pokeId = location.slice(16);

  const fetchPokeData = async () => {
    const data = await fetchOnePoke(pokeId);
    setPokeData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchPokeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
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
      <div>
        <h2>Sprites nos jogos de cada geração</h2>
        <h4>{pokeData.sprites?.versions["generation-i"].yellow.front_default ? 'Sprite 1º Geração' : 'Sprite não existente na primeira geração'}</h4>
        {pokeData.sprites?.versions["generation-i"].yellow.front_default
          ? <img src={pokeData.sprites?.versions["generation-i"].yellow.front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na primeira geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-ii"].crystal.front_default ? 'Sprite 2º Geração' : 'Sprite não existente na segunda geração'}</h4>
        {pokeData.sprites?.versions["generation-ii"].crystal.front_default
          ? <img src={pokeData.sprites?.versions["generation-ii"].crystal.front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na segunda geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-iii"].emerald.front_default ? 'Sprite 3º Geração' : 'Sprite não existente na terceira geração'}</h4>
        {pokeData.sprites?.versions["generation-iii"].emerald.front_default
          ? <img src={pokeData.sprites?.versions["generation-iii"].emerald.front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na terceira geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default ? 'Sprite 4º Geração' : 'Sprite não existente na quarta geração'}</h4>
        {pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default
          ? <img src={pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na quarta geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-v"]["black-white"].front_default ? 'Sprite 5º Geração' : 'Sprite não existente na quinta geração'}</h4>
        {pokeData.sprites?.versions["generation-v"]["black-white"].front_default
          ? <img src={pokeData.sprites?.versions["generation-v"]["black-white"].front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Sprite não existente na quinta geração</h5>}
      </div>
      <div>
        <h2>Golpes que esse pokemon pode possuir</h2>
        <ul>
          {(pokeData.moves).map((e) => <li>{e.move.name}</li>)}
        </ul>
      </div>
    </div>
  )
}
