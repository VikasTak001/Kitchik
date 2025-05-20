import React, { createContext } from 'react'
export const Context = createContext();


export default function MainContext({children}) {
  return (
    <>
    <Context.Provider>
        {children}
    </Context.Provider>
    </>
  )
}
