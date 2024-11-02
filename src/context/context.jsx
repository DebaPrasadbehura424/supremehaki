import { createContext, useState } from "react";

export const RouterConetext = createContext(null);



export function RouterAva({ children }) {
    const [buy, setBuy] = useState(false);
    return (
        <RouterConetext.Provider value={{ buy, setBuy }}>
            {children}
        </RouterConetext.Provider>
    )
}