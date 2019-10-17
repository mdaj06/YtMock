import React from "react";
import "./layout/VideoStyle.css"

const VideoItem =({video, onVideoSelect})=>{


 return(
 <div onClick={()=>onVideoSelect(video)} className="video-item item">
 <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
 <div className="content">
     <div className="header">
       <h4> {video.snippet.title}</h4>
       <p className="desc">Author:{video.snippet.channelTitle}</p>

    
     </div>
 </div>
 
 </div>
 
 ) 


};

export default VideoItem;