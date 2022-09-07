import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralProvider from './context/GeneralProvider';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import PokeProfile from './pages/PokeProfile';

function App() {
  return (
    <div className="App">
      <GeneralProvider>
        <Routes>
          <Route exact path="/" element={ <Login/> } />
          <Route exact path="/home" element={ <Home/> }/>
          <Route path="/pokemonProfile/:id" element= { <PokeProfile/> }/>
          <Route path="/favorites" element= { <Favorites/> } />
        </Routes>
      </GeneralProvider>
    </div>
  );
}

export default App;
