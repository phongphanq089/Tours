import React from "react";
import Tour from "./tour";
function Tours ({dataToure,handelDeleted}) {
    
     return (
          <section>
               <div>
                    <h2>our tours</h2>
                    
               </div>
               <div>
                    {dataToure.map(tour =>{
                         return(
                             <Tour key ={tour.id} {...tour} handelDeleted ={handelDeleted}/>
                         )
                    })}
               </div>
          </section>
     )
}
export default Tours