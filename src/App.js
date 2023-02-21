import React from 'react';

import './App.css';
import { useState } from 'react';
import Even from './even';


function App() {
   const [count,setCount]=useState(0)
  return (
    <div className="App">
     <h2>{count}</h2>
     {count%2===0 ? <Even/>:''}
     <div>
     <button onClick={()=>setCount(count+1)}>+</button>
     <button onClick={()=>setCount(0)}>Reset</button>
     <button onClick={()=>setCount(count-1)}>-</button>
     </div>
    
    </div>
  );
}

export default App;
