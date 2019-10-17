import React,{useState,useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDescription from "./VideoDescription";




const App=()=>{
  const [videos,setVideos] = useState([]);
  const [currVideo,setCurrVideo] = useState(null);

  const API_KEY="AIzaSyA9Ah-1FvA9DESd1Ul9g7rWOnAqxCth4Yc";

  useEffect(()=>{

      onTextSub('React Dev');
  },[]);

  
   const onTextSub=  async (text) =>{
  
    //the prop name can be our ownlike the onformsubmit we put  in search--->
   const ytdata = await axios.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResuts=6&key=${API_KEY}&q=${text}`);

     setVideos(ytdata.data.items)
     setCurrVideo(ytdata.data.items[0])
  
  }


return(
<div className="ui container">
        
        <SearchBar onFormSubmit={onTextSub} />
        <div className="ui grid"> 
        <div className="ui row">

            <div className="eleven wide column">
            <VideoDescription video={currVideo} />
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={setCurrVideo} videos={videos}/>
            </div>
        </div>
      </div> 
      </div>


)


}



export default App;
