import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/navbar/NavBar.js'
import ItemListContainer from './components/navbar/ItemListContainer';
import {MiComponente} from './components/MiComponente.js';

const App = () => {
  return(
    <>
      <div className ='App'>
        <NavBar/>
        <ItemListContainer
            greeting={"TRANSCAR DEL VALLE Market"}
          />
        <MiComponente/>
         
      </div>
    </>
  );
}

export default App
