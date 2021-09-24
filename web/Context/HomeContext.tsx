import { Children, createContext, ReactNode, useDebugValue, useEffect, useState } from "react";
import { getConstantValue } from "typescript";
import Home from "../pages";
type HomeContextData = {
    audio: HTMLAudioElement;
}

type HomeContextProps = {
    children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData); 

export const HomeContextProvider = ({children}: HomeContextProps) => {
    const  [audio, setAudio] = useState<HTMLAudioElement>();
    
    useEffect(()=>{
      const initialAudio  = new Audio("/audio/audio1.mp3");
    }, []);

    return ( 
         <HomeContext.Provider value={
            {
              audio
            }
        }>
         {Children}
    </HomeContext.Provider>

     );
}
