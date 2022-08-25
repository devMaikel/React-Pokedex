import React, { useContext, useEffect } from 'react';
import GeneralContext from '../context/GeneralContext';
import { fetchAllPoke } from '../servicesAPI/requests';
import PokeCard from './PokeCard';


export default function PokeList() {
  const { allPokes, setAllPokes } = useContext(GeneralContext);
  useEffect(() => {
    const getAllPokes = async () => { // pegando todos pokemons da api e adicionando dex numbers
      const response = await fetchAllPoke();
      const data = response.map((e, index) => index >= 0 && { ...e, dexnumber: index +1 });
      setAllPokes(data);
    };
    getAllPokes();
    
  }, []);

  console.log(allPokes);
  
  return (
    <div>
      {
        allPokes.map((e, index) => (
          (index < 50) && <PokeCard
            key={ e.name } 
            name={ e.name }
            index= { index +1}
          />))
      }
    </div>
  )
}
