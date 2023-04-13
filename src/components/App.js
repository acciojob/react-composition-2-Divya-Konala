
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [show,setShow]=useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={()=>setShow(true)}>Show Modal</button>
        <div className={(show)?"show":"hide"}>
          <div className="model-overlay" >
            <div className="modalContent">
              <button className="model-close" onClick={()=>setShow(false)}>Close</button>
              <p>This is the content of the modal.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
