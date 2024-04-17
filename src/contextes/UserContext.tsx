import { createContext, useState } from "react";

interface IUserContext {
    isDirector: boolean,
    name: string
    setIsDirector: (isDirector: boolean) => void
    setName: (name: string) => void
}

export const UserContext = createContext<IUserContext>({
    isDirector: false,
    setIsDirector: () => {},
    name: '',
    setName: () => {}
});
  
export const UserState = ({ children }: {children: React.ReactNode}) => {
    const [isDirector, setIsDirector] = useState(false);
    const [name, setName] = useState('logout');

    return (
        <UserContext.Provider value={{
            isDirector,
            setIsDirector,
            name,
            setName
        }}>
            {children}
        </UserContext.Provider>
    );
}