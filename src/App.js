import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/navbar/NavBar.js';
import ItemListContainer from './components/navbar/ItemListContainer';

const App = () => {
  
  return(

    <div className ='App'>

      <Navbar/>

      <ItemListContainer/>     

    </div>

  );
  
}

export default App
