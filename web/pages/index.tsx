import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext';
import {timeToString} from '../utils/Time';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {
     isPlaying,
     musicas,
     musicIndex,
     duration,
     currentTime,
     volume,
     playPause,
     configMusic,
     configTime,
     configVolume
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
     <div className={styles.control}>
         <input 
         className={styles.timeControl}
         type="range" 
         min="0" 
         max={duration} 
         value={currentTime} 
         onChange = {(e) => configTime(Number(e.target.value))}
         />
         <div className={styles.time}>
           <span>{timeToString(currentTime)}</span>
           <span>{timeToString(duration)}</span>
         </div>
         <div>
           <input
           type="range"
           min="0"
           max="1"
           step="0.01"
           value={volume}
           onChange= {(e) => configVolume(Number(e.target.value))}
           />
         </div>
     </div>
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
