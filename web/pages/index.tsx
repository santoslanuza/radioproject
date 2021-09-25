import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {
     isPlaying,
     playPause
  } = useContext(HomeContext);
  return (
    <div className={styles.container}>
      {isPlaying ?
      (<button onClick={playPause}>Pausar</button>):
      (<button onClick={playPause}>Tocar</button>)    
     }    
     </div>
  )
}
