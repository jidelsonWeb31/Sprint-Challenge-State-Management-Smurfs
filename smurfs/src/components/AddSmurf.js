import React, { useState, useContext, useEffect } from 'react';
import { SmurfContext } from './SmurfContext';
import axios from 'axios';


const AddSmurf = () => {
    const [name, setName] = useState('');
    const [smurfs, setSmurfs] = useState([]);

    const user = useContext(SmurfContext)

    const updateName = e => {
        setName(e.target.value)
    };

    const addSmurf = e => {
        e.preventDefault()
    setSmurfs(prevSmurfs => [...prevSmurfs, {name:name}])
    };

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