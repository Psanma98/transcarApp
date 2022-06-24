import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/navbar/ItemListContainer';
import {ItemCount} from './components/ItemCount';

const App = () => {


  
  return(
    <>
      <div className ='App'>
        <NavBar/>
        <ItemListContainer
            greeting={"TRANSCAR DEL VALLE Market"}
          />
       
         
      </div>
    </>
  );
}

export default App
