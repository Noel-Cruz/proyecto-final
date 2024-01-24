
const Cart = () => {
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
                          <li>
                              <div>
                                  <img src="../public/imgProductos/img6.png"/>
                                  <span>OUTLET NOTEBOOK XPG XENIA 14 I5 1135G7 512GB 16GB 14 W10</span>
                              </div>
                              <div>
                                  <span>$ 199000</span>
                              </div>
                              <div>
                                  <span>4</span>
                              </div>
                              <div>
                                  <span>$ 700056</span>
                              </div>
                              <div style={{background:'url(../trash-solid.svg) center center / 46% auto no-repeat',height:'1.9rem',width:'2rem'}}>

                              </div>
                          </li>
                          <li>
                              <div>
                                  <img src="../public/imgProductos/img6.png"/>
                                  <span>OUTLET NOTEBOOK XPG XENIA 14 I5 1135G7 512GB 16GB 14 W10</span>
                              </div>
                              <div>
                                  <span>$ 199000</span>
                              </div>
                              <div>
                                  <span>4</span>
                              </div>
                              <div>
                                  <span>$ 700056</span>
                              </div>
                              <div style={{background:'url(../trash-solid.svg) center center / 46% auto no-repeat',height:'1.9rem',width:'2rem'}}>

                              </div>
                          </li>
                      </ul>
                  </section>
                  <section>
                    <form>
                        <h5>
                            Tu compra
                        </h5>
                        <fieldset>
                            <legend>Datos personales</legend>
                            <label >
                                Nombre
                                <input type="text" />
                            </label>
                            <label >
                                Apellido
                                <input type="text" />
                            </label>
                            <label >
                                Telefono
                                <input type="tel" />
                            </label>
                            <label >
                                Mail
                                <input type="email"/>
                            </label>
                            <label >
                                Repetir mail
                                <input type="email" />
                            </label>
                        </fieldset>
                        <div>
                            <strong>Total</strong>
                            <p>
                                <span>Catidad:</span>
                                <span>6</span>
                            </p>
                            <p>
                                <span>Precio:</span>
                                <span>$ 997877</span>
                            </p>
                        </div>
                        <button type="button">Finalizar compra</button>
                    </form>
                    <button type="button">
                        Agregar productos
                    </button>
                  </section>
              </div>
          </div>
      </main>
  )
}

export default Cart