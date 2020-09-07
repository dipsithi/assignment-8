import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [users, setUsers] = useState ([]);

  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then ( res => res.json ())
    .then ( data => setUsers (data))
  }, [])

    return (

        <div style={{backgroundColor:'lightyellow', marginTop:'-25px', marginLeft:'15px', marginRight:'15px'}}>

            <h1 style={{backgroundColor:'lightBlue', textAlign:'center'}}>Welcome to Social Buddy React Router Assignment</h1>
            
      {
        users.map(user =><Post key={user.id} user = {user}></Post>)
      }

    
        </div>
    );
};

export default Home;