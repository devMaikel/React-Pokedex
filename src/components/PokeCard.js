import React from 'react'
import { Link } from 'react-router-dom'
// import '../style/pokeCard.css'

export default function PokeCard({name, index, sprite, abilities, types, status}) {

  return (
    <Link to= {`/pokemonProfile/${name}`}>
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
        </ul>
        <h5>TYPE</h5>
        <ul>
          { types.map((e) => <li key={e.type.name}>{e.type.name}</li>) }
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
        {/* <ul>
          { status.map((e) => <li key={e.stat.name}>{`${e.stat.name} - ${e.base_stat}`}</li>)}
        </ul> */}
      </div>
    </Link>
  )
}
