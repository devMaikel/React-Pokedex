import React, { useContext, useEffect } from 'react';
import GeneralContext from '../context/GeneralContext';
import { fetch644Poke } from '../servicesAPI/requests';
import PokeCard from './PokeCard';


export default function PokeList() {
  const { setAllPokes, nameSearch,
    shownPokes, setShownPokes } = useContext(GeneralContext);
  useEffect(() => {
    const getPokes = async () => {
      const data = await fetch644Poke(151);
      setAllPokes(data);
      setShownPokes(data);
    };
    getPokes();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OFC_ART_STR = 'official-artwork';
  return (
    <section>
      { nameSearch === '' ?
        shownPokes.map((e) => (
          <PokeCard
            key={ e.data.name } 
            name={ e.data.name }
            index= { e.data.id }
            sprite= { e.data.sprites.other[OFC_ART_STR].front_default}
            abilities= {e.data.abilities}
            types= { e.data.types }
            status= { e.data.stats }
          />))
          : shownPokes.filter((e) => (e.data.name).includes(nameSearch)).map((e) => (
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
  )
}
