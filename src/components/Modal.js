import React from "react";

const Modal=(props)=>{
    return <div className="modal-overlay">
        <div className="modal">
              <button className="modal-close" onClick={()=>props.onClose}>Close</button>
              {props.children}
        </div>
    </div>
}
export default Modal