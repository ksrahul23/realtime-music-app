import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const ActivePageContext = createContext()

export function ActivePageProvider({ children }){
  const location = useLocation()
  const [active, setActive] = useState(location.pathname || '/')

  useEffect(()=>{
    setActive(location.pathname)
  },[location])

  return (
    <ActivePageContext.Provider value={{active}}>
      {children}
    </ActivePageContext.Provider>
  )
}

export default ActivePageProvider
