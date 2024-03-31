import React, { useState } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

const Element = ({ type, id }) => {
  //   useDrag
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Card",
    item: {
      type,
      from: "sidebar",
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <div
        ref={drag}
        className={`element ${type}`}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {capFirstLetter(type)}
      </div>
    </>
  );
};

export default Element;
