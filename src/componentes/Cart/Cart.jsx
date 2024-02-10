import {useContext,useState,useEffect} from "react"
import { contexto } from "../../Context/context";
import ItemCart from "../ItemCart/ItemCart";

import { db } from "../../sevices/config";
import { addDoc,collection,query,getDocs} from "firebase/firestore";
const Cart = () => {
    
    const{producAgregados,cantidadTolal,precioTotal,sumarCantidades}=useContext(contexto);
    const[obj,setObj]=useState({productos:producAgregados.current},);
    const[infoOrden,setInfoOrden]=useState([]);
    const[listaCarro,setListaCarro]=useState(producAgregados.current);
    function eliminarItemCart(id){
        producAgregados.current=producAgregados.current.filter((obj)=>obj.id!=id);
        setListaCarro(producAgregados.current);
        sumarCantidades()
    };
    function generarOrden(e){
        e.preventDefault();
        setObj({...obj,fecha:new Date()});
        addDoc(collection(db, "ordenes"), obj);
        orden();
    };


    function orden(){
        const dbO=query(collection(db,'ordenes'));
        getDocs(dbO).then((res)=>{
            setInfoOrden(res.docs)
        })
    };
    
    orden();
  return (
      <main id="main-cart">
          <div>
              <h1>
                  CARRITO DE COMPRAS
              </h1>
              <div>
                  <section>
                      <strong>
                          Descripcion de tu pedido:
                      </strong>
                      <ul>
                          <li>
                            <span>Producto</span>
                            <span>Precio</span>
                            <span>Cantidad</span>
                            <span>Subtotal</span>
                          </li>
                          {
                            listaCarro.map((producto)=><ItemCart key={producto.id} {...producto} eliminarItemCart={eliminarItemCart} />)
                          }
                      </ul>
                  </section>
                  <section>
                    <form onSubmit={generarOrden}>
                        <h5>
                            Tu compra
                        </h5>
                        <fieldset>
                            <legend>Datos personales</legend>
                            <label >
                                Nombre
                                <input type="text" onChange={(e)=>{setObj({...obj,nombre:e.target.value})}}/>
                            </label>
                            <label >
                                Apellido
                                <input type="text" onChange={(e)=>{setObj({...obj,apellido:e.target.value})}}/>
                            </label>
                            <label >
                                Telefono
                                <input type="tel" onChange={(e)=>{setObj({...obj,telefono:e.target.value})}}/>
                            </label>
                            <label >
                                Mail
                                <input type="email" onChange={(e)=>{setObj({...obj,mail:e.target.value})}}/>
                            </label>
                            <label >
                                Repetir mail
                                <input type="email" onChange={(e)=>{setObj({...obj,repetirMail:e.target.value})}}/>
                            </label>
                        </fieldset>
                        <div>
                            <strong>Total</strong>
                            <p>
                                <span>Catidad:</span>
                                <span>{cantidadTolal}</span>
                            </p>
                            <p>
                                <span>Precio:</span>
                                <span>$ {precioTotal}</span>
                            </p>
                        </div>
                        <button type="submit">Finalizar compra</button>
                    </form>
                    <button type="button">
                        Agregar productos
                    </button>
                    <ul>
                        {
                            infoOrden.map((doc)=>
                            <li key={doc.id}>
                            <span>
                                Nombre: {doc.data().nombre}
                            </span>
                            <span>
                            Codigo: {doc.id}
                            </span>
                            <span>
                                4/5/2024
                            </span>
                            </li>
                            )
                        }
                    </ul>
                  </section>
              </div>
          </div>
      </main>
  )
}

export default Cart