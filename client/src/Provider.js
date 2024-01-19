import React, { createContext } from 'react'
export const Data=createContext()
const Provider = ({children}) => {
    let name="sekhar"

  return (
    <div>
      <Data.Provider value={{name}}>
        {children}
      </Data.Provider>
    </div>
  )
}

export default Provider
