import React from 'react'
import './pokeCard.css'

export default function PokeCard({name, index, sprite, abilities, types, status}) {
  return (
    <div className='poke-card'>
      <h5 className='poke-name'>{`#${index} ${name}`}</h5>
      <img 
        src={ sprite }
        alt={ name }
        width="150"
      />
      <br/>
      ABILITIES
      <ul>
        { abilities.map((e) => <li key={e.ability.name}>{e.ability.name}</li>) }
      </ul>
      TYPE
      <ul>
        { types.map((e) => <li key={e.type.name}>{e.type.name}</li>) }
      </ul>
      BASE STATUS
      <ul>
        { status.map((e) => <li key={e.stat.name}>{`${e.stat.name} - ${e.base_stat}`}</li>)}
      </ul>
    </div>
  )
}
