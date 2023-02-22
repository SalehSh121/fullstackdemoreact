import { useState, useEffect } from "react";
import log from './logo.svg'

function Comstyle(props){

return(
<div>

  <center>
  <div className="card" style={{width:"400px"}}>
    <img className="card-img-top" src={log} alt="Card image" style={{width:"100%"}} />
    <div className="card-body">
      <h4 className="card-title">{props.fName}</h4>
      <p className="card-text">{props.lName}</p>
      <a href="#" className="btn btn-primary">{props.address}</a>
    </div>
  </div>
  </center>
  <br></br>
  <hr></hr>
</div>

);

}
function Names ()  {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/names")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <Comstyle  fName={item.fName}  lName={item.lName}  address={item.address} />;
        })}
    </>
  );
};

export default Names;
