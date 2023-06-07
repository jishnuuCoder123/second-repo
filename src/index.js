import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import Count from "./Count";

function MyApp() {
   const [count , setCount] = useState(0)
   const addCount = () => {
     setCount(count + 1)
   }
   return (
    <div className="container">
     <button onClick={addCount}>Add</button>
     <Count count = {count}/>
  </div>
   )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
);

