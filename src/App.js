
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Tours/loading';
import Tours from './Tours/tours';
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [dataToure, setDatatour] = useState([])

  const handelDeleted = (id) =>{
    const newTours = dataToure.filter(tour => tour.id !== id)
    setDatatour(newTours)
  }
  const fecthToures = async() =>{
    setLoading (true)
      try{
        const res = await fetch(url)
        const tours = await res.json()
        setLoading(false)
        setDatatour(tours)
        
      }catch (error){
            setLoading(false)
            console.log(error)
      }
  }
  useEffect(() =>{
    fecthToures()
  },[]);
 


  if(loading){
    return <main>
      <Loading/>
    </main>
  }
  if (dataToure.length === 0){
    return (
      <div className='App'>
          <div className='title'>
            <h2>No tours left</h2>
            <button onClick={() =>  fecthToures()}>
              refresh
            </button>
          </div>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours dataToure = {dataToure}  handelDeleted ={handelDeleted}/>
    </div>
  );
}

export default App;
