import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Boton from './components/Boton';
import Contador from './components/ItemCount';
import { useState } from 'react';
import Item from './components/Item'


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1)
  }

  const reiniciarContacor = () =>{
    setNumClics(numClics - 1)
  }


  return (

  <div>
  <NavBar/>

  <ItemListContainer />

  <Contador numClics={numClics} />

  <Boton 
  texto="+" 
  esBotonDeClic={true}
  manejarClic={manejarClic}/>

<Boton 
  texto="-" 
  esBotonDeClic={false}
  manejarClic={reiniciarContacor}/>
 


   </div>
  );

  
}

export default App;
