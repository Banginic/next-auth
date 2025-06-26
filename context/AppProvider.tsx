import React, { useState } from 'react'
import AppContext from './AppContext'

function AppProvider( {children }: { children: React.ReactNode}) {
  const [isLoggedIn, setLoggedIn ] = useState(false);

    const values = {
        isLoggedIn, setLoggedIn
    }
  return (
    <AppContext value={values}>
      { children }
    </AppContext>
  )
}

export default AppProvider
