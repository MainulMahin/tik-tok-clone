import React from 'react';
import './videoFooter.css';
import logo from './logo512.png';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
           <div className="videoFooter_text">
           <h3>@{channel}</h3>
           <p>{description}</p>
           <div className="videoFooter__ticker">
           <MusicNoteIcon className="videoFooter__icon"/>
           <Ticker mode="smooth">
           {(index) => (
               <>
               <p>{song}</p>
               </>
           )}
           </Ticker>
           </div>
           </div>
        <img src={logo} alt="recording" className="videoFooter_record"/>
          
        </div>
    )
}

export default VideoFooter

