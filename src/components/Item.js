import React from 'react';
import '../Estilos/Item.css';
import ItemList from './ItemList';


 const Item = ({ id, titulo, precio, img }) => {
  return (

    <div className="item">
            <div className="titulo-item">
            <h2>{titulo}</h2>
            </div>
             <div className="cuerpo-item">
                <img src={img} className="img-item"  />
                <p>Precio{precio}</p>
                <button className="btn-item">
                        Ver detalle del producto
                </button>
             </div>
        <div className="footer-item">
                <p>Cantinada en stock: 17</p>
        </div>

    </div>
  
  )
}


export default Item;