import React, { useState } from 'react';
import Element from './Element';
import './styles.css';

const Sidebar = () => {
    const [tags,setTags] = useState([
        {
            id:1,
            type: "label"
        },
        {
            id:2,
            type: "input"
        },
        {
            id:3,
            type: "button"
        }
    ])
  return (
    <div className="sidebar">
      <Element type="label" id={1} key={1}/>
      <Element type="input" id={2} key={2}/>
      <Element type="button" id={3} key={3}/>
      
    </div>
  );
};

export default Sidebar;
