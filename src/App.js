import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GeneralProvider from './context/GeneralProvider';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <GeneralProvider>
        <Routes>
          <Route exact path="/" element={ <Login/> } />
          <Route exact path="/home" element={ <Home/> }/>
        </Routes>
      </GeneralProvider>
    </div>
  );
}

export default App;
