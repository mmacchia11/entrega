import React from 'react';
import '../Estilos/Item.css';
import ItemCount from './ItemCount';



 const Item = ({ id, titulo, precio, img }) => {

        const onAdd = (qty) => {
                alert(`Agregaste ${qty} productos`);
              };
              
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

        <div className="containar-contenedor">

        <ItemCount  onAdd={onAdd}  initial={1} stock={5} />
        </div>
    </div>
  
  )
}


export default Item;