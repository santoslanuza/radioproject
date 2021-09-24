import { createContext, ReactNode, useDebugValue } from "react";
import { getConstantValue } from "typescript";
type HomeContextData = {

}

type HomeContextProps = {
    children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData); 

export const HomeContextProvider = ({children}: HomeContextProps) => {
     return {
         HomeContext

     };

}
