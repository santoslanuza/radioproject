import { Children, createContext, ReactNode, useDebugValue, useEffect, useState } from "react";
import { getConstantValue } from "typescript";
import Home from "../pages";
import {musicas} from '../dados/musicas';

type Music = {
    nome: string,
    audio: string,
    capa: string
}

type HomeContextData = {
    audio: HTMLAudioElement;
    isPlaying: boolean;
    musicas: Music[],
    musicIndex: number,
    playPause: () => void;
    configMusic: (index: number) => void;
}

type HomeContextProps = {
    children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData); 

export const HomeContextProvider = ({children}: HomeContextProps) => {
    const  [audio , setAudio] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState (0);

    useEffect(()=>{
      const initialAudio  = new Audio(`/audios/${musicas[musicIndex].audio}`);
      setAudio(initialAudio);
  
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

   const configMusic = (index: number) => {
        alert(index);
   }

    return ( 
         <HomeContext.Provider value={
            {
              audio,
              isPlaying,
              musicas,
              musicIndex,
              playPause,
              configMusic
            }
        }>
          {children}
    </HomeContext.Provider>

     );
}
