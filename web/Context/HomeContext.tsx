import { Children, createContext, ReactNode, useDebugValue, useEffect, useState } from "react";
import { getConstantValue } from "typescript";
import Home from "../pages";
type HomeContextData = {
    audio: HTMLAudioElement;
    isPlaying: boolean;
    playPause: () => void;
}

type HomeContextProps = {
    children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData); 

export const HomeContextProvider = ({children}: HomeContextProps) => {
    const  [audio , setAudio] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(()=>{
      const initialAudio  = new Audio("/audios/audio1.mp3");
      setAudio(initialAudio);
      initialAudio.play();
    }, []);


    const playPause = () => {
      if(isPlaying){
         audio.pause();
         setIsPlaying(false);
      }
      else{
        audio.play();
        setIsPlaying(true);
      }
    }

    return ( 
         <HomeContext.Provider value={
            {
              audio,
              isPlaying,
              playPause
            }
        }>
          {children}
    </HomeContext.Provider>

     );
}
