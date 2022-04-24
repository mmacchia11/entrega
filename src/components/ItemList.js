import React from 'react'
import Item from './Item';
const Productos = [
        {
                titulo: 'cuchara',
                img : 'cuharas.png',
                descripcion:'ansdlansdkasdsad',
                id:'01',
                precio:455

        },
        {
                titulo: 'tenedor',
                img : 'tenedor.png',
                descripcion:'oooooooooooooooooo',
                id:'02',
                precio:45

        },
        {
                titulo: 'cuchillo',
                img : 'cuchillo.png',
                descripcion:'aaaaaaaaaaaaaaaaaa',
                id:'03',
                precio:25

        },
        {
                titulo: 'sarten',
                img : 'sarten.png',
                descripcion:'sssssssssssssssss',
                id:'04',
                precio:155

        }
];

 const ItemList = () => {
      

  return (

      
    <div>
            {Productos.map(product => {
                    return <Item 
                    id={product.id}
                    titulo = {product.titulo}
                    precio = {product.precio}
                    img = {product.img} 
                    />


            })
        }




            
    </div>
  )
}




export default ItemList;