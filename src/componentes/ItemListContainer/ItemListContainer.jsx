import { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getDocs,query,collection } from "firebase/firestore";
import { db } from '../../sevices/config';

const ItemListContainer = () => {
  

  const [productos,setProductos]=useState([]);
  const {idCategoria}=useParams();

  const dbV=query(collection(db,'vxproductos'));


  function productosPorCategoria(){
    getDocs(dbV).then(
      (response)=>{
        const productos=response.docs.filter((producto)=> producto.data().idCategoria===idCategoria);
        setProductos(productos.map((doc)=>({
          id:doc.id,...doc.data()
        })));
        console.log(productos);
      }
    )
  };
  function todosLosProductos(){
    getDocs(dbV).then((response)=>{
      setProductos(response.docs.map((doc)=>({
        id:doc.id,...doc.data()
      })))
    })
  };
  useEffect(()=>{
    let productosARenderizar=idCategoria?productosPorCategoria:todosLosProductos;
    productosARenderizar();
  }
  ,[idCategoria]);
  return (
    <main id='main-index'>
          <ItemList productos={productos}/>
    </main>

  )
}

export default ItemListContainer