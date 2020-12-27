import React from 'react';
import Providers from './providers';
import './App.css';
import HomePage from './pages/homePage';

function App() {

  return (
    <Providers>
      <HomePage />
    </Providers>
  );
}

export default App;
