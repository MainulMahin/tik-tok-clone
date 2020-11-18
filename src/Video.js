import React, {useRef, useState} from 'react';
import './Video.css';
import video from './video-g.mp4';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video(
{url,
channel,
description,
song,
Likes,
Messages,
Shares}
) {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
          videoRef.current.play();
          setPlaying(true);
        }
    }

    return (
        <div className="video">
        
        <video autoplay
        className="video__player" 
        onClick={onVideoPress} 
        ref={videoRef}
        src={url}>
        </video>
        
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar Likes={Likes} Shares={Shares} Messages={Messages}/>
        </div>
    )
}

export default Video;
