import { useState } from 'react';


function MyFormcarput() {
   
    const [inputs, setInputs] = useState({});
    const [carName , setCarName] = useState();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        const response = await fetch('http://localhost:10000/cars/insertcar/'+carName,{
         method:'PUT',
         body:JSON.stringify(inputs),
         headers: {
           'Content-Type' : 'application/json'
         }
        });
        console.log(response);
      }
      

      
  return (
    <form onSubmit={handleSubmit}>
   
      <label>Enter your car type:
        <input 
          type="text" 
          name="carType" 
          value={inputs.carType || ""} 
          onChange={handleChange}
        />
        </label>

        <label>Enter your car color:
        <input 
          type="text" 
          name="carColor" 
          value={inputs.carColor || ""} 
          onChange={handleChange}
        />
        </label>
      
        <input type="submit" />

   <br></br>
   <hr></hr>
        <label>Enter your car name:
        <input
          type="text" 
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
        />
      </label>
    </form>
  )
}

export default MyFormcarput;


