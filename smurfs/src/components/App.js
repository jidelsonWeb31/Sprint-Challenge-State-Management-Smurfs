import React, { Component, useState, useEffect } from "react";
import "./App.css";

import AddSmurf from './AddSmurf';
import { SmurfProvider } from './SmurfContext';
import SmurfList from './SmurfList';
import {SmurfContext} from './SmurfContext';
import axios from 'axios';

 function App () {
  const [smurfs, setSmurfs] = useState([]);

  // GET REQUEST
  const getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(function(res) {
      console.log(res);
      setSmurfs([...smurfs, res.data.name])
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  useEffect(() =>{
    getSmurf()
    }, [])

    

  
    return (
      <SmurfContext.Provider value={[smurfs]}>
      <div className="App">
       <AddSmurf />
       <SmurfList />
      </div>
      </SmurfContext.Provider>
    );
  
}

export default App;
