import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
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
      <div className={styles.header}>
      
      {isPlaying ?
      (<button onClick={playPause}><PauseCircleOutlineIcon /></button>):
      (<button onClick={playPause}><PlayCircleOutlineIcon /></button>)    
     }  
     </div>  
     </div>
  )
}
