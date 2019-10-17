import React,{useState} from "react";

 const Searchbar = ({onFormSubmit})=>{

   const [text,setText] = useState("");

   const onTextChange = (e)=>{

    setText(e.target.value);

   }
   
   const onKeyPress = (e)=>{


    if(e.key==="Enter"){

      onFormSubmit(text);
    }


   }

   return(
    <div className="ui form">
    <div className="ui segment">
      <div className="field">
        <label>Video Search</label>
        <input 
        type="text" 
        value = {text}
        onChange={onTextChange}
        onKeyPress={onKeyPress}
        ></input>
      </div>
    </div>
    </div>)
    
    
   }



 
export default Searchbar;