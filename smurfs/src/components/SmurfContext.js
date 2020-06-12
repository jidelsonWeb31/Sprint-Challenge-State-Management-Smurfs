import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SmurfContext = createContext();

export const SmurfProvider = props => {
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



// POST REQUEST
        const postSmurf = aSmurf => {
            axios.post('http://localhost:3333/smurfs', aSmurf)
              .then(res => {
                setSmurfs([res.data, ...smurfs])
                  console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
          } 
        
          useEffect(() =>{
          postSmurf()
          }, [])


        

    return(
        <SmurfContext.SmurfProvider value={[smurfs, setSmurfs]}>
            {props.children}
        </SmurfContext.SmurfProvider>
    );

    



}