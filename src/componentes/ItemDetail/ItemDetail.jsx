
const ItemDetail = ({img,titulo,precio,descripcion}) => {
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
          <span>stock disponible: 00</span>
            <section>
              <button type="button">+</button>
              <p>0</p>
              <button type="button">-</button>
            </section>
            <button type="button"> Agregar al carrito</button>
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