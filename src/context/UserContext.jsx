import { createContext, useState } from "react";
import React from 'react'


export const UserContext = createContext(undefined)

export function UserProvider ( { children }) {
    const [total,setTotal] = useState({
        terminated:0,
        promoted:0,
        total_new:0
    });

    const handlecount= (key) => {
        var obj = {};
        obj[key] = total[key]+1;
        setTotal({...total,...obj})
    }
    return (
        <UserContext.Provider value={{total,handlecount}}>
            { children }
        </UserContext.Provider>
    )
}