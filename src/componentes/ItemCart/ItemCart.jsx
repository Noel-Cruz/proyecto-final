
const ItemCart = ({id,img,titulo,precio,cantidad,subTotal,eliminarItemCart}) => {
  return (
    <li>
        <div>
            <img src={img}/>
            <span>{titulo}</span>
        </div>
        <div>
            <span>$ {precio}</span>
        </div>
        <div>
            <span>{cantidad}</span>
        </div>
        <div>
            <span>$ {subTotal}</span>
        </div>
        <div onClick={()=>{eliminarItemCart(id)}} style={{background:'url(../trash-solid.svg) center center / 46% auto no-repeat',height:'1.9rem',width:'2rem'}}>

        </div>
    </li>
  )
}

export default ItemCart