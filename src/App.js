import React, {useState, useEffect} from 'react';
import Video from "./Video";
import './App.css';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([]);

useEffect (() => {
  db.collection('videos').onSnapshot(snapShot => (
    setVideos(snapShot.docs.map(doc => doc.data ()))
    )
  )
}, [])

  return (
    <div className="app">
    <div className="app__videos"> 
    {videos.map(({url, channel, description, song, Likes, Messages, Shares}) => (
      <Video 
      url={url}
      channel={channel}
      description={description}
      song={song}
      Likes={Likes}
      Messages={Messages}
      Shares={Shares}
      />
    ))}
    </div>
    </div>
  );
}

export default App;
