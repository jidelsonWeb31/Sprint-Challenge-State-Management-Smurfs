import React, { useState, useContext, useEffect, useReducer } from 'react';
import { SmurfContext } from './SmurfContext';
import axios from 'axios';



const AddSmurf = () => {
    const [name, setName] = useState('');
    const [smurfs, setSmurfs] = useState([]);

    const user = useContext(SmurfContext)

    const onInputChange = e => {
       const name = e.target.name
       const value = e.target.value
    };

    const addSmurf = e => {
        e.preventDefault()
    setSmurfs(prevSmurfs => [...prevSmurfs, {smurfs: smurfs}])
    };


 

    //POST REQUEST
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
        <form>

            <div>
            <label>Name:&nbsp;</label>
            <input
            type="text"
            name="name"
            onChange={onInputChange}
            
            />
            </div>

            <div>
                <label>Age: &nbsp;</label>
                <input 
                type="text"
                name="age"
                onChange={onInputChange}
                /> 
            </div>

            <div>
                <label>Height: &nbsp;</label>
                <input
                type="text"
                name="height"
                onChange={onInputChange}
                />
            </div>
            
            <button onClick={addSmurf}>Submit</button>

        </form>
        </div>
    )

}

export default AddSmurf;