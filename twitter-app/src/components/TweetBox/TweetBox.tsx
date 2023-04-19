import React from 'react';
import { useState } from 'react';
import TweetComponent from '../Tweet/TweetComponent';
import axios from 'axios';



const TweetBox =(props: { color: string; }) => {
  const [messages, setMessages] = useState<string[]>([]);
  
  const [inputMessage, setinputMessage] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    // 👇 Get input value from "event"
    setinputMessage(event.target.value);
  };
  
  const onTweetClick = () => {
     setMessages(oldMessages => [...oldMessages , inputMessage])
     }
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const data = { messages };
    const response = await axios.post('http://localhost:5000/save-data', data);
    console.log(response.data);
    
  }
  
  
  return (
    <div  >
        <div>

          <h3 style = { {color: props.color} }> Tweet here </h3>
          <form onSubmit={onTweetClick}>
            <input type="text" 
            name = "message" 
            id = "message"
            onChange={handleChange}
            className="Input-box" />
           < img onClick = {onTweetClick}  style={{
          width: 26,
          height: 15 }} src="https://as2.ftcdn.net/v2/jpg/05/30/79/15/1000_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.webp"/>
         </form>
          </div>
        
      <br></br>
      
     {messages.map(tweet => <TweetComponent TweetMessage={tweet}/>) }
     
     <br></br>

    </div>
    
  );
  }

export default TweetBox;
