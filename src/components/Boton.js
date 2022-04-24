import React from 'react';
import '../Estilos/Boton.css';


 const Boton = ({texto, esBotonDeClic, manejarClic}) => {
  return (
    <div>
      <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
      </button>

    </div>
  )
}


export default Boton;