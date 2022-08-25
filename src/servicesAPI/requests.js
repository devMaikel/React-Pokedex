import * as endpoints from './endpoints';

export const fetchAllPoke = async () => {
  const response = await fetch(endpoints.ALLPOKEMONS_URL);
  const data = await response.json();
  return data.results
};

export const fetchOnePoke = async (name) => {

};
