import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import PokeCard from '../components/PokeCard';
import GeneralContext from '../context/GeneralContext'

export default function Favorites() {
  const { userData } = useContext(GeneralContext);

  return (
    <div>
      <br/><br/> {/* preguiça de fazer css só pra isso xD  */}
      <h1>Favorites</h1>
      <br/><br/> {/* preguiça de fazer css só pra isso xD */}
      { (userData.favPokemons.length > 0) 
        ? <section>
            {
              userData.favPokemons.map((e) => (
                <PokeCard
                  key={ e.name } 
                  name={ e.name }
                  index= { e.index }
                  sprite= { e.sprite}
                  abilities= {e.abilities}
                  types= { e.types }
                  status= { e.status }
                />
              ))
            }
          </section>
        : <h2>Você não possui pokemon na lista de favoritos</h2>
      }
      <br/><br/><br/><br/> {/* preguiça de fazer css só pra isso xD */}
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  )
}
