import React from 'react';
import './add-panel.css';

const AddPanel = (props) => {
  const {addItem} = props; 
  return (
    <div className="add-item">
      <button type = "button" className="btn btn-outline-secondary"
           onClick = {()=>{addItem("Hello, world!")}}>Add todos item</button>
      
    </div>
  )
}

export default AddPanel;
