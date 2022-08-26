import React, { useContext, useEffect } from 'react';
import GeneralContext from '../context/GeneralContext';
import { fetch644Poke } from '../servicesAPI/requests';
import PokeCard from './PokeCard';


export default function PokeList() {
  const { allPokes, setAllPokes, userData, setUserData, nameSearch,
    shownPokes, setShownPokes } = useContext(GeneralContext);
  useEffect(() => {
    // const getAllPokes = async () => { // pegando todos pokemons da api e adicionando dex numbers
    //   const response = await fetchAllPoke();
    //   const data = response.map((e, index) => index >= 0 && { ...e, dexnumber: index +1 });
    //   setAllPokes(data);
    // };
    // getAllPokes();
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
          // (index < 644) && 
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
            // (index < 644) && 
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
      {/* <button type='button' onClick={ showMore }>Mostrar mais</button> */}
    </section>
  )
}
