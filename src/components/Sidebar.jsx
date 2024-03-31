import React, { useState } from "react";
import Element from "./Element";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>BLOCKS</h2>
      <Element type="label" key={1} />
      <Element type="input" key={2} />
      <Element type="button" key={3} />
    </div>
  );
};

export default Sidebar;
