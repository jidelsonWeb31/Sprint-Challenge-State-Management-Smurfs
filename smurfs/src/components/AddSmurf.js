import React, { useState, useEffect, useContext } from 'react';
import { SmurfContext } from './SmurfContext';
// import axios from 'axios';

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


    // const getSmurfs = () => {
    //     axios.get('http://localhost:3333/smurfs')
    //     .then(function(res) {
    //       console.log(res);
    //       setSmurfs([...smurfs, res.data])
    //     })
    //     .catch(function(err) {
    //       console.log(err)
    //     })
    //   }
    
    //   useEffect(() =>{
    //     getSmurfs()
    //     }, [])
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