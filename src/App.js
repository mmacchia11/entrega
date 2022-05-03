import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import Item from './components/Item'
import ItemCount from './components/ItemCount'
import MoviesContainer from './components/movies/MoviesContainer';

function App() {

 
  

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  }


  return (

  <div>
  <NavBar/>

  <ItemListContainer />


  
 
    <ItemCount  onAdd={onAdd}  initial={1} stock={5} />

    <MoviesContainer />

   </div>
  );

  
}

export default App;
