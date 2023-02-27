import { useState, useEffect } from "react";
import './tablest.css';

function Comstyle(props){

    return(
      <tr>
        <td>{props.carName}</td>
        <td>{props.carType}</td>
        <td>{props.carColor}</td>
        <td><img src={require (`${props.carImage}`)} width='50' height='50' /></td>
      </tr>

    );
}


function Comstyle1(props){

    return(
    <div>
        <center>
     <div className="w3-container">

<div className="w3-card-4 w3-dark-grey" style={{width:"50%"}}>

  <div className="w3-container w3-center">
    <h3>{props.carName}</h3>
    <img src={require (`${props.carImage}`)} alt="Avatar" style={{width:"80%"}} />
    <h5>{props.carType}</h5>

    <div className="w3-section">
      <button className="w3-button w3-red">{props.carColor}</button>
    </div>
  </div>

</div>
</div>
</center>
      <br></br>
      <hr></hr>
    </div>
    
    );
}





function Cars ()  {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:10000/cars")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);
  
    return (
      <>
       <table>
        <tr>
            <th>Car Name</th>
            <th>Car Type</th>
            <th>Car Color</th>
            <th>Car Image</th>

        </tr>
        {data &&
          data.map((item) => {
            return <Comstyle1  carName={item.carName}  carType={item.carType}  carColor={item.carColor} carImage={item.carImage} />;
          })}
        </table>
      </>
      
    );
  };
  
  export default Cars;