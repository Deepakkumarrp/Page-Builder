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
      <Element type="label" key={1}/>
      <Element type="input" key={2}/>
      <Element type="button" key={3}/>
      
    </div>
  );
};

export default Sidebar;
