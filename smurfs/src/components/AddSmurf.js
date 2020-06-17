import React, { useState, useContext, useEffect, useReducer } from 'react';
import { SmurfContext } from './SmurfContext';
import axios from 'axios';

const initialFormValues = {
  name:'',
  age: '',
  height:''
}

const AddSmurf = () => {
   
  // const [smurfs, setSmurfs] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);

    const {smurfs, postSmurf, setSmurfs} = useContext(SmurfContext);

    const onInputChange = e => {
      const name = e.target.name
      const value = e.target.value

      setFormValues({...formValues, [name]:value})
   };

   const addSmurf = e => {
       e.preventDefault()
     const newSmurf = {
       name: formValues.name,
       age: formValues.age,
       height: formValues.height 
     }
     // setSmurfs(prevSmurfs => [...prevSmurfs, {smurfs: smurfs}])
     postSmurf(newSmurf)
     setFormValues(initialFormValues)
     setSmurfs([...smurfs, newSmurf])   
   };


   
    
        




    return(
        <div>
        <form onSubmit={addSmurf}>

            <div>
            <label>Name:&nbsp;</label>
            <input
            type="text"
            name="name"
            onChange={onInputChange}
            value={formValues.name}
            />
            </div>

            <div>
                <label>Age: &nbsp;</label>
                <input 
                type="text"
                name="age"
                onChange={onInputChange}
                value={formValues.age}
                /> 
            </div>

            <div>
                <label>Height: &nbsp;</label>
                <input
                type="text"
                name="height"
                onChange={onInputChange}
                value= {formValues.height}
                />
            </div>
            
            <button onClick={addSmurf}>Submit</button>

        </form>
        </div>
    )

}

export default AddSmurf;