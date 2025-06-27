'use client'
import React, { useState } from 'react'
import AppContext from './AppContext'
import { User } from '@/models/types'

function AppProvider( {children }: { children: React.ReactNode}) {
  const [isLoggedIn, setLoggedIn ] = useState(true);
  const [User, setUser] = useState<User | null>(null);

    const values = {
        isLoggedIn, setLoggedIn,
        User, setUser
    }
  return (
    <AppContext value={values}>
      { children }
    </AppContext>
  )
}

export default AppProvider
