import React, { useEffect, useState } from 'react';
import './App.css';
import BASE_URL from './Constants/Constants';
import Character from './components/Character';
import axios from 'axios';
import Container from './components/Container'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(res => {
      //  console.log('name the log', res.data.results);
      //  console.log(res.data.results);
       setData(res.data.results);
      })
      .catch(error => {
      console.log('name the log', error)
      })
      }, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {data.map(c => <Character card = {c}/>)}
      </div>
    </div>
  );
} 

export default App;
