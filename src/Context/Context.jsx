import React, { createContext } from "react";

export const contexto=createContext();

const Context = ({children}) => {
  return (
    <contexto.Provider>
        {children}
    </contexto.Provider>
  )
}

export default Context