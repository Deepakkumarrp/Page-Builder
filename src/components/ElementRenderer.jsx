// ElementRenderer.jsx
import React, { useState, useContext } from "react";
import { useDrag } from "react-dnd";
import Modal from "./Modal";
import { Context } from "./Page";

const ElementRenderer = ({ config }) => {
  const {
    elements,
    handleDeleteElement,
  } = useContext(Context);

  const { type, x, y, fontSize, fontWeight, text } = config;
  const [isSelected, setIsSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("ELEMENT: ", config);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Card",
    item: {
      type,
      from: "page",
      config: config,
      id: config.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const elementStyle = {
    position: "absolute",
    left: x + "px",
    top: y + "px",
    fontSize: fontSize + "px",
    fontWeight: fontWeight,
    width: "auto",
    opacity: isDragging ? 0.5 : 1, 
    cursor: "move", 
    border: isSelected ? "2px solid red" : "none", 
  };

  const handleElementClick = () => {
    setIsSelected(!isSelected); 
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (isSelected && e.key === "Enter") {
      console.log(config);
      setIsModalOpen(true);
    }
    if (isSelected && e.key === "Delete") {
      console.log(elements);
      handleDeleteElement(config.id);
    }
  };

  return (
    <>
      <div>
        {type === "label" && (
          <label
            ref={drag}
            style={elementStyle}
            onClick={handleElementClick}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            {text}
          </label>
        )}
        {type === "button" && (
          <button
            ref={drag}
            style={elementStyle}
            onClick={handleElementClick}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            {text}
          </button>
        )}
        {type === "input" && (
          <input
            type="text"
            ref={drag}
            style={elementStyle}
            value={text}
            readOnly
            onClick={handleElementClick}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          />
        )}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          modalType={config}
        />

      )}
    </>
  );
};

export default ElementRenderer;
