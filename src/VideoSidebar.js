import React, {useState} from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FaceIcon from '@material-ui/icons/Face';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function VideoSidebar({Likes, Shares, Messages}) {
const [Liked, setLiked] = useState(false);

    return (
        <div className="VideoSideBar">
        <div className="videoSidebar__button">
        <div className="videoSidebar__button">
            <FaceIcon fontSize="large"/>
        </div>
        <div className="videoSidebar__plus">
            <AddCircleIcon className="videoSidebar_follow"/>
        </div>
        { Liked ? <FavoriteIcon fontSize="large" onClick={ () => setLiked(false)}/> : 
        <FavoriteBorderIcon fontSize="large" onClick = {() => setLiked(true)} /> }
            <p>{Liked? Likes+1 : Likes}</p>
        </div>
        <div className="videoSidebar__button">
            <MessageIcon fontSize="large"/>
            <p>{Messages}</p>
        </div>
        <div className="videoSidebar__button">
            <ShareIcon fontSize="large"/>
            <p>{Shares}</p>
        </div>
        </div>
    )
}

export default VideoSidebar
