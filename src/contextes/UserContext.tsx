import { createContext, useState } from "react";

interface IUserContext {
    isDirector: boolean,
    name: string,
    userId: number,
    setIsDirector: (isDirector: boolean) => void,
    setName: (name: string) => void,
    setUserId: (userId: number) => void,
}

export const UserContext = createContext<IUserContext>({
    isDirector: false,
    setIsDirector: () => {},
    name: '',
    setName: () => {},
    userId: 0, 
    setUserId: () => {},
});
  
export const UserState = ({ children }: {children: React.ReactNode}) => {
    const [isDirector, setIsDirector] = useState(true);
    const [name, setName] = useState('logout');
    const [userId, setUserId] = useState(0);

    return (
        <UserContext.Provider value={{
            isDirector,
            setIsDirector,
            name,
            setName,
            userId,
            setUserId
        }}>
            {children}
        </UserContext.Provider>
    );
}