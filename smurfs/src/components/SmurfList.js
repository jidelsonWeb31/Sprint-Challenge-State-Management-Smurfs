import React, { useState, useContext } from 'react';
import Smurf from './Smurf';
import { SmurfContext } from './SmurfContext';

const SmurfList = () => {
    const [smurfs, setSmurfs] = useContext(SmurfContext);

    return(
        <div>
            {smurfs.map(smurf => (
                <Smurf 
                name={smurf.name}
                key={smurf.id}
                />
            ))}
        </div>
    )
}

export default SmurfList;