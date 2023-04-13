import React from "react";

const Modal=(props)=>{
    return <div className="model-overlay">
        <div className="modalContent">
              <button className="model-close" onClick={()=>props.onClose}>Close</button>
              {props.children}
        </div>
    </div>
}
export default Modal