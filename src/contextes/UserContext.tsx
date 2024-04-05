import { createContext, useState } from "react";

interface IRouteContext {
    isDirector: boolean,
    setIsDirector: (isDirector: boolean) => void
}

export const RouteContext = createContext<IRouteContext>({
    isDirector: false,
    setIsDirector: () => {}
});
  
export const RouteState = ({ children }: {children: React.ReactNode}) => {
    const [isDirector, setIsDirector] = useState(false);

    return (
        <RouteContext.Provider value={{
            isDirector,
            setIsDirector
        }}>
            {children}
        </RouteContext.Provider>
    );
}