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
        <h4>{pokeData.sprites?.versions["generation-i"].yellow.front_default ? '1º Geração' : 'Não existente na primeira geração'}</h4>
        {pokeData.sprites?.versions["generation-i"].yellow.front_default
          ? <img src={pokeData.sprites?.versions["generation-i"].yellow.front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na primeira geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-ii"].crystal.front_default ? '2º Geração' : 'Não existente na segunda geração'}</h4>
        {pokeData.sprites?.versions["generation-ii"].crystal.front_default
          ? <img src={pokeData.sprites?.versions["generation-ii"].crystal.front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na segunda geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-iii"].emerald.front_default ? '3º Geração' : 'Não existente na terceira geração'}</h4>
        {pokeData.sprites?.versions["generation-iii"].emerald.front_default
          ? <img src={pokeData.sprites?.versions["generation-iii"].emerald.front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na terceira geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default ? '4º Geração' : 'Não existente na quarta geração'}</h4>
        {pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default
          ? <img src={pokeData.sprites?.versions["generation-iv"]["diamond-pearl"].front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na quarta geração</h5>}
        <h4>{pokeData.sprites?.versions["generation-v"]["black-white"].front_default ? '5º Geração' : 'Não existente na quinta geração'}</h4>
        {pokeData.sprites?.versions["generation-v"]["black-white"].front_default
          ? <img src={pokeData.sprites?.versions["generation-v"]["black-white"].front_default} alt={pokeData.name + 'gen 1'}></img>
          : <h5>Pokemon não existente na quinta geração</h5>}
      </div>
    </div>
  )
}
