import { contexto } from "../../Context/context"
import { useContext } from "react"
const CartWidget = () => {
  const {cantidadTolal}=useContext(contexto);

  return (
    <div style={{background:'url(../cart-shopping-solid.svg) center center / contain no-repeat',height:'1.9rem',width:'2rem'}}>
      <span style={{minWidth:'13px',textAlign:'center'}}>
        {cantidadTolal}
      </span>
    </div>
  )
}

export default CartWidget