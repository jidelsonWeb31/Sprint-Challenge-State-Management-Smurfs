import React, { Component, useState, useEffect, useContext } from "react";
import "./App.css";
import AddSmurf from './AddSmurf';
import SmurfList from './SmurfList';
import {SmurfContext} from './SmurfContext';
import axios from 'axios';

const initialFormValues = {
  name:'',
  age: '',
  height:''
}

 function App () {
  const [smurfs, setSmurfs] = useState([]);
  

  // const myData = useContext(SmurfContext);


  const getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(function(res) {
      console.log(res);
      setSmurfs(res.data)
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  useEffect(() =>{
    getSmurf()
    }, [])

    //POST REQUEST
    const postSmurf = aSmurf => {
      axios.post('http://localhost:3333/smurfs', aSmurf)
        .then(res => {
          setSmurfs(res.data)
            console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    } 
  
    useEffect(() =>{
    postSmurf()
    }, [])


 
    return (
      <SmurfContext.Provider value={{smurfs, postSmurf, setSmurfs}}>
      <div className="App">
       <AddSmurf />
       <SmurfList />
      </div>
      </SmurfContext.Provider>
    );
  
}

export default App;
