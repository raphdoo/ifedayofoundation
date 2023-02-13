import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { intro } from '../assets';
import styles from '../styles'


const Video = () => {
  const vidRef = React.useRef()
  
  const [playVideo, setPlayVideo] = useState(false)
  
  const handleVideo = () => {
    setPlayVideo((playVideo) => !playVideo)

    if(playVideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }
  return (
    <div id="intro" className={`${styles.flexCenter} app__video mt-[40px] mb-[30px] `}>
      <video src={intro} ref={vidRef} type="video/mp4" loop controls={false}/>
      <div className={`app__video-overlay ${styles.flexCenter}`}>
        <div className={`app__video-overlay_circle ${styles.flexCenter}`} onClick={handleVideo}>
          {
            playVideo ?
            <BsPauseFill color="#FFF" fontSize={30}/> :
            <BsFillPlayFill color="#FFF" fontSize={30}/>
          }
        </div>
      </div>
    </div>
  )
};

export default Video;