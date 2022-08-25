import axios from 'axios';
import * as endpoints from './endpoints';

export const fetchAllPoke = async () => {
  const response = await fetch(endpoints.ALLPOKEMONS_URL);
  const data = await response.json();
  return data.results
};

export const fetchOnePoke = async (name) => {

};

export const fetch644Poke = async (total) => {
  let fetchEndpoints = [];
  for(let i = 1; i <= total; i += 1) {
    fetchEndpoints.push(`${endpoints.APOKEMON_URL}${i}/`);
  }
  const response = await axios.all(fetchEndpoints.map((e) => axios.get(e)));
  console.log(response);
  return response;
}