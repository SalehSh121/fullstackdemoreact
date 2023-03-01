import { useState } from 'react';

function MyFormcar() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    const response =  fetch('http://localhost:10000/cars/insertcar/',{
     method:'POST',
     body:JSON.stringify(inputs),
     headers: {
       'Content-Type' : 'application/json'
     }
    });
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your car name:
      <input 
        type="text" 
        name="carName" 
        value={inputs.carName || ""} 
        onChange={handleChange}
      />
      </label>
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

        <label>Enter your car color:
        <input 
          type="text" 
          name="carImage" 
          value={inputs.carImage || ""} 
          onChange={handleChange}
        />
        </label>


        <input type="submit" />
    </form>
  )
}

export default MyFormcar;