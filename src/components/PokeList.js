import React, { useContext, useEffect, useState } from 'react';
import GeneralContext from '../context/GeneralContext';
import { fetch644Poke } from '../servicesAPI/requests';
import PokeCard from './PokeCard';
import Loading from './Loading';
// import '../style/pokeList.css'

export default function PokeList() {
  const { setAllPokes, nameSearch,
    shownPokes, setShownPokes, shownPokesNumber, setShownPokesNumber } = useContext(GeneralContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const getPokes = async () => {
      const data = await fetch644Poke(151);
      setAllPokes(data);
      setShownPokes(data);
    };
    getPokes();
    setIsLoading(false);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OFC_ART_STR = 'official-artwork';
  return (
    <div>
      <section>
        { nameSearch === '' ?
          shownPokes.map((e, index) => index < shownPokesNumber && ( (!isLoading) ?
            <PokeCard
              key={ e.data.name } 
              name={ e.data.name }
              index= { e.data.id }
              sprite= { e.data.sprites.other[OFC_ART_STR].front_default}
              abilities= {e.data.abilities}
              types= { e.data.types }
              status= { e.data.stats }
            /> : <Loading name={ e.data.name } key={ e.data.name }/>))
            : shownPokes.filter((e) => (e.data.name).includes(nameSearch.toLowerCase())).map((e) =>(
              <PokeCard
                key={ e.data.name } 
                name={ e.data.name }
                index= { e.data.id }
                sprite= { e.data.sprites.other[OFC_ART_STR].front_default}
                abilities= {e.data.abilities}
                types= { e.data.types }
                status= { e.data.stats }
              />))
        }
      </section>
      <button
        type='button'
        onClick = { () => setShownPokesNumber(shownPokesNumber+30) }
        className = 'mostrarMaisBtn'
        >
          Mostrar mais
        </button>
    </div>

  )
}
