import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {
     isPlaying,
     musicas,
     musicIndex,
     playPause,
     configMusic
  } = useContext(HomeContext);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.headerImage}> 
       <img src={`capas/${musicas[musicIndex].capa}`} />    
      {isPlaying ?
      (<button onClick={playPause}><PauseCircleOutlineIcon /></button>):
      (<button onClick={playPause}><PlayCircleOutlineIcon /></button>)    
     }  
     </div>
     </div>
      <div className={styles.content}>
        {
          musicas.map((music, index)=> {
          return (
            <div onClick={() => configMusic(index)} key={music.audio} className={styles.musicItem}>
            <img src={`capas/${music.capa}`} />
            <h1>{music.nome}</h1>
           </div>
          )
        }) 
      } 
      </div>
     </div>
  )
}
