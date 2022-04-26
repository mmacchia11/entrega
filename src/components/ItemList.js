import React from 'react'
import Item from './Item';
import { useEffect } from 'react';
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
      
        useEffect( () => { 
                
                
                const promesa = new Promise((resolve, reject) =>{
                        const rand = Math.random();
                        console.log(rand)
                      
                      setTimeout(() => {
                          if(rand <= 0.5){
                                resolve('ok')
                        }else{
                                reject('Erro')
                        }

                },2000)
 
                }) 

               
               
                
                promesa.then(results => {
                                console.log(Productos)
                        })
                        .catch(err => {
                                console.log('Promesa Rechazada', err)
                        })
             
        }, [])

 return (

      
    <div>
            {
            
                Productos.map(product => {
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