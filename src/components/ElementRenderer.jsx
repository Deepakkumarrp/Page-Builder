// ElementRenderer.jsx
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import Modal from "./Modal";

const ElementRenderer = ({ config, handleElement }) => {
  const {
    elements,
    handleAddElement,
    handleUpdateElement,
    handleDeleteElement} = handleElement
  const { type, x, y, fontSize, fontWeight, text } = config;
  const [isSelected, setIsSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Card",
    item: { 
      type,
      from: "page",
      config: config,
      id: config.id
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
    opacity: isDragging ? 0.5 : 1, // Change opacity while dragging
    cursor: "move", // Change cursor to indicate draggable
    border: isSelected ? "2px solid red" : "none", // Apply red border if selected
  };

  const handleElementClick = () => {
    setIsSelected(!isSelected); // Toggle selected state on click
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (isSelected && e.key === "Enter") {
      console.log(config);
      setIsModalOpen(true);
    }
    if(isSelected && e.key === "Delete"){
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
          handleElement={{
            elements,
            handleAddElement,
            handleUpdateElement,
            handleDeleteElement,
          }}
        />
        // Pass the necessary props to Modal component, like isOpen, handleClose, and config
      )}
    </>
  );
};

export default ElementRenderer;
