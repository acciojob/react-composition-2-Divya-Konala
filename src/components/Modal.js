import React from "react";

const Modal=(props)=>{
    return <div onClick={()=>props.onClose()} className="modal">
              <button className="modal-close" onClick={()=>props.onClose}>Close</button>
              {props.children}
    </div>
}
export default Modal