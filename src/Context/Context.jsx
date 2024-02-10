import React, { createContext, useRef, useState } from "react";

export const contexto=createContext();

const Context = ({children}) => {
  const [cantidadTolal,setCantidadTotal]=useState(0);
  const [precioTotal,setPrecioTotal]=useState(0);
  const producAgregados=useRef([]);
  
  function sumarCantidades(){
    const fSumar=(prop)=>producAgregados.current.reduce((acumulador,operando)=>acumulador+operando[prop],0);
    setCantidadTotal(fSumar('cantidad'));
    setPrecioTotal(fSumar('subTotal'));
  };
  return (
    <contexto.Provider value={{cantidadTolal,sumarCantidades,producAgregados,precioTotal}}>
        {children}
    </contexto.Provider>
  )
}

export default Context