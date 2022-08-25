import React from 'react'
import './pokeCard.css'

export default function PokeCard({name, index}) {
  return (
    <div className='poke-card'>
      <h5 className='poke-name'>{`#${index} ${name}`}</h5>
      <img 
        src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png` }
        alt={ name }
        width="150"
      />
    </div>
  )
}
