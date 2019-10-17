import React from "react";
import Spinner from "./layout/Spinner.js";


const VideoDescription = ({video})=>{

    if(!video){

return <Spinner/>

    }

    const embedLink=`https://www.youtube.com/embed/${video.id.videoId}`
    return (<div>
        <div className="ui embed">
            <iframe title="youtube embed" src={embedLink}></iframe>
        </div>
        <div className="ui segment">
            <h3 className="ui header">{video.snippet.title}</h3>
            <h4>Description : {video.snippet.description}</h4>
            <p>Author : {video.snippet.channelTitle}</p>

        </div>
        </div>)

}

export default VideoDescription;