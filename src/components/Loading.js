import React from 'react';
import loadingPoke from '../assets/loading.gif';

export default function Loading() {
  return (
    <div>
      <img src={loadingPoke} alt='Loading' width='150px'></img>
      <h2>Loading</h2>
    </div>
  )
}
