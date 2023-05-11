import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';




const UserName = (props: { color: string; }) => {


    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    
    
          
            useEffect(() => {
                
                const sendingData = async () => {
                
                const data = {username };
                const response = await axios.post('http://localhost:5000/username', data);
                
                console.log('username', username)
              }
              sendingData()
                .catch(console.error);
            }, [username]);
            
            useEffect(() => {
                
                const sendingData = async () => {
                
                const data = {password };
                const response = await axios.post('http://localhost:5000/password', data);
                
                console.log('password', password)
              }
              sendingData()
                .catch(console.error);
            }, [password]);
            
            const onFormSubmitUser = (event: React.FormEvent) => {
                setUsername(username)
                
                event.preventDefault()
            
              }

              const onFormSubmitPass = (event: React.FormEvent) => {
                setPassword(password)
                
                event.preventDefault()
            
              }
   
    



    return (
        <div>
        <form onSubmit={onFormSubmitUser}>
          <div className="input-container" >
            <label style={{color: 'black'}}>Username </label>
            <input type="text" name="uname" required />
           
          </div>
          </form>

          <form onSubmit={onFormSubmitPass}>
          <div className="input-container" >
            <label style={{color: 'black'}}>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>



    );
}


export default UserName;