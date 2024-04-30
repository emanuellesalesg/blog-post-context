import { ReactNode, createContext, useState } from "react";

type context = {
    name: string;
    setName: (sName: string) => void;
}

export const LoggedUserContext = createContext<context | null>(null);

export function Loggeduser({children}: {children: ReactNode}){
    const [name, setName] = useState("Emma");
    

    return (
        <LoggedUserContext.Provider value={{name, setName}}>
        {children}
    </LoggedUserContext.Provider>
    )
}