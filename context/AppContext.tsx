'use client'
import React, { createContext } from "react";
import { User } from "@/models/types";

interface ContextProps {
    isLoggedIn: boolean
    setLoggedIn :React.Dispatch<React.SetStateAction<boolean>>;
    User: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;

}
const AppContext = createContext< ContextProps | null >(null)

export default AppContext
