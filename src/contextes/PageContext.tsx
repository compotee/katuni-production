import { createContext, useState } from "react";

interface IPageContext {
    isOrderPage: boolean,
    setIsOrderPage: (isOrderPage: boolean) => void
}

export const PageContext = createContext<IPageContext>({
    isOrderPage: true,
    setIsOrderPage: () => {}
});
  
export const PageState = ({ children }: {children: React.ReactNode}) => {
    const [isOrderPage, setIsOrderPage] = useState(true);

    return (
        <PageContext.Provider value={{
            isOrderPage,
            setIsOrderPage
        }}>
            {children}
        </PageContext.Provider>
    );
}