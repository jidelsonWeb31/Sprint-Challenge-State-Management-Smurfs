import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SmurfContext = createContext();

export const SmurfProvider = props => {
    const [smurfs, setSmurfs] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3333/smurfs')
    //     .then(res => {
    //         setSmurfs(res.data.name)
    //         console.log(res.data.name)
    //     })
    //     .catch(err => {
    //         console.log('You have an error')
    //     })
    // },[])

    const getSmurfs = () => {
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
        getSmurfs()
        }, [])


        

    return(
        <SmurfContext.SmurfProvider value={[smurfs, setSmurfs]}>
        {props.children}
        </SmurfContext.SmurfProvider>
    );

    



}