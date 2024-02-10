import { useState,useContext} from "react"
import { contexto } from "../../Context/context";

const ItemDetail = ({id,img,titulo,precio,descripcion,stock}) => {
  const [contador,setContador]=useState(1);
  const {producAgregados,sumarCantidades}=useContext(contexto);

  const sumarContador = () => {
     setContador(contador + 1);
}

const restarContador = () => {
   setContador(contador - 1);
}
function controlAgregarPruduc(){
  if (producAgregados.current.some((obj)=>obj.id===id)) {
    producAgregados.current.map((obj)=>{if(obj.id===id){obj.cantidad=contador;obj.subTotal=precio*contador}});
    //aca falta algo//
  }else{
    producAgregados.current=[...producAgregados.current,{id,img,titulo,precio,cantidad:contador,subTotal:precio*contador}];
  }
};
  return (
    <article id='ItemDetail'>
      <div>
        <picture>
          <img src={img} alt="" />
        </picture>
        <div>
          <h5>
            {titulo}
          </h5>
          <span>
            {precio}
          </span>
          <form>
          <span>stock disponible: {stock}</span>
            <section>
              <button type="button"onClick={()=> contador>1&&restarContador()}>-</button>
              <p>{contador}</p>
              <button type="button"onClick={()=> stock>contador&&sumarContador()}>+</button>
            </section>
            {/* falta un if para sincronizar con el stock*/}
            <button type="button"onClick={()=>{controlAgregarPruduc();sumarCantidades()}}>
               Agregar al carrito
            </button>
          </form>
        </div>
      </div>
      <p>
        {descripcion}
      </p>
    </article>
  )
}

export default ItemDetail