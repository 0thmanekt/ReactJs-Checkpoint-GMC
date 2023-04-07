import React from 'react';
import './App.css';
import ProfilPhoto from './Components/Profil/ProfilPhoto';
import FullName from './Components/Profil/FullName';
import Adress from './Components/Profil/Adress';

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
