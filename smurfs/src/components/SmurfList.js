import React, { useState, useContext } from 'react';
// import Smurf from './Smurf';
import { SmurfContext } from './SmurfContext';

const SmurfList = () => {
    const {smurfs} = useContext(SmurfContext)
console.log(smurfs);
    return(
    
        <div>
            
            {smurfs?.map((smurfs) => (
                 
              <div> 
              {smurfs.name}
              {smurfs.age}
              {smurfs.height}
              </div>
            ))}
           

        </div>
        
    )
}

export default SmurfList;