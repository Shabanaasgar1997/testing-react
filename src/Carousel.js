import React,{useState} from "react";

//higher order function name// lower order arrow function
function Carousel({ name, designation, salary }) {
  const [shabana,setShabana]=useState(0);
  const [price,setPrice]=useState(0);
  const Pavan=()=>{
      setShabana(shabana+1);
      setPrice(price+1000)
    console.log('hey u clicked the increment button');

  }
const Shravani=()=>{
  if(shabana==1)
  {
    setShabana(1);
  }
  else
  {
  setShabana(shabana-1);
}
}

  return (
    <div>
      {name}
      {designation}1 hey this is about carousel
      <div>
      <h1>{price}</h1>
      <button className="btn btn-success" onClick={Shravani}>-</button><span>{shabana}</span><button className="btn bg-danger" onClick={Pavan}>+</button>
      </div>
    </div>
  );
}

export default Carousel;
