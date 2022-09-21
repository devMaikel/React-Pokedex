import React from 'react';
import loadingPoke from '../assets/loading.gif';

export default function Loading(props) {
  return (
    <div key={props.name}>
      <img src={loadingPoke} alt='Loading' width='150px'></img>
      <h2>Loading</h2>
    </div>
  )
}
