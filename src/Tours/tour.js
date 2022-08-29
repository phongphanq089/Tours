import React, { useState } from "react";
function Tour ({id, image,info,price,name, handelDeleted}){
     const [realmore, setRelmore] = useState(false)
     return (
       <div className="singgle-tour">
         
         <img src = {image} alt ={name}/>
          <footer>
               <div className="tour-info" >
                    <h4>{name}</h4>
                    <h4 className="tour-price">
                         {price}
                    </h4>
               </div>
               <p>{realmore ? info: `${info.substring(0,200)}...`}
               <button onClick={() => setRelmore(!realmore)}>
               {realmore ? "show-less": "show-more"}</button>
               </p>
               
          </footer>
          <button className="interested" onClick={() => handelDeleted(id)}> not interested</button>

       </div>  
     )
}
export default Tour;