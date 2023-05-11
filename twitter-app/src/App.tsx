import React from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './components/TweetBox/TweetBox';
import { useEffect } from 'react';
import axios from 'axios';
import UserName from './components/Users/UserName';








function App() {
  
  useEffect(() => {
    axios.get('http://localhost:5000/members')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  }, []);


  return (
    <div className="App">
      
      <header className="App-header"  >
      
      
      <img className="black-logo" src = "https://cdn-icons-png.flaticon.com/512/81/81609.png"/>
        <p className='User'>
          <UserName color= 'black' />
        </p>
      <TweetBox color = "black" />
      
        
      </header>
      
      
    </div>
    
  );
}

export default App;
