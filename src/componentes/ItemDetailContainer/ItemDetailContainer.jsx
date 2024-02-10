import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getDocs,query,collection } from "firebase/firestore";
import { db } from '../../sevices/config';

const ItemDetailContainer = () => {
    const [producto,setProducto]=useState([]);
    const {id}=useParams();

    const dbV=query(collection(db,'vxproductos'));

  useEffect(()=>{
    getDocs(dbV).then((response)=>{
        const producto=response.docs.find((producto)=>producto.id===id);
        setProducto({id:producto.id,...producto.data()});
    })
  },[])
  return (
    <main>
        <ItemDetail {...producto} />
    </main>
  )
}

export default ItemDetailContainer