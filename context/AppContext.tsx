import React, { createContext } from "react";

interface ContextProps {
    isLoggedIn: boolean
    setLoggedIn :React.Dispatch<React.SetStateAction<boolean>>
}
const AppContext = createContext< ContextProps | null >(null)

export default AppContext
