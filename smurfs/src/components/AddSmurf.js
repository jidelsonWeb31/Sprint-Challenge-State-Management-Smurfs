import React, { useState, useContext } from 'react';
import { SmurfContext } from './SmurfContext';


const AddSmurf = () => {
    const [name, setName] = useState('');
    const [smurfs, setSmurfs] = useContext(SmurfContext);

    const updateName = e => {
        setName(e.target.value)
    };

    const addSmurf = e => {
        e.preventDefault()
    setSmurfs(prevSmurfs => [...prevSmurfs, {name:name}])
    };


    return(
        <div>
        <form onSubmit = {addSmurf}>
            <input
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            />

            <button>Submit</button>

        </form>
        </div>
    )

}

export default AddSmurf;