import axios from "axios";

const KEY='AIzaSyCO9NLDx9TDFVKtVprHUnXcd5vqMv65F4w';


export default axios.create({

  baseURl: 'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResuts:3,
    key:KEY

  }




});