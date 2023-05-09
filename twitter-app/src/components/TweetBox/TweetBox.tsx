import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import TweetComponent from '../Tweet/TweetComponent';
import axios from 'axios';

const TweetBox = (props: { color: string; }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [numberOfTweets, setNumberOfTweets] = useState(0);

  useEffect(() => {
    setNumberOfTweets(messages.length);
  }, [messages])

  const [inputMessage, setinputMessage] = useState('');
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    // 👇 Get input value from "event"
    setinputMessage(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent) => {
    setMessages(oldMessages => [...oldMessages, inputMessage])
    console.log("onFormSubmit", messages)
    event.preventDefault()

  }
  const onFormClick = (event: React.MouseEvent<HTMLElement>) => {

    setMessages(oldMessages => [...oldMessages, inputMessage])
    console.log("onFormClick", messages)
  }

  useEffect(() => {
    const receivingData = async () => {

      const response = await axios.get('http://localhost:5000/members');

      console.log('receivingData', messages)
      setMessages(oldMessages => [...response.data.members])

    }

    
    receivingData()
      .catch(console.error);
  }, []);

  useEffect(() => {
      if (messages.length == 0) {return } 
      const sendingData = async () => {
      
      const data = { messages };
      const response = await axios.post('http://localhost:5000/save-data', data);
      
      console.log('sendingData44444', messages)
    }
    sendingData()
      .catch(console.error);
  }, [messages]);


  return (
    <div  >
      <div>

        <h3 style={{ color: props.color }}> Tweet here </h3>
        <form onSubmit={onFormSubmit}>
          <input type="text"
            name="message"
            id="message"
            onChange={handleChange}
            className="Input-box" />
          < img onClick={onFormClick} style={{
            width: 26,
            height: 15
          }} src="https://as2.ftcdn.net/v2/jpg/05/30/79/15/1000_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.webp" />
        </form>
      </div>
      <br></br>
       


      {messages.map(tweet => <TweetComponent TweetMessage={tweet} />)}

      <br></br>

    </div>

  );
}

export default TweetBox;
