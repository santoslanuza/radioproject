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
    const  [audio , setAudio] = useState<HTMLAudioElement>();
    
    useEffect(()=>{
      const initialAudio  = new Audio("/audio/audio1.mp3");
      setAudio(initialAudio);
      initialAudio.play();
    }, []);

    useEffect(()=>{
      const initialAudio = new Audio("/audio/audio2.mp3");
      setAudio(initialAudio); 
    }, []);

    useEffect(()=>{
       const initialAudio = new Audio("/audio/audio3.mp3");
       setAudio(initialAudio);
    }, []);

    return ( 
         <HomeContext.Provider value={
            {
              audio
            }
        }>
          {children}
    </HomeContext.Provider>

     );
}
