import React from 'react';
import {SmurfContext} from '../components/SmurfContext';

const Smurf = () => {
    return(
        <SmurfContext.Consumer>
        {value => <div>{value}</div>}
    </SmurfContext.Consumer>
    )
}

export default Smurf;