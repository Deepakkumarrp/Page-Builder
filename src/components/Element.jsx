import React, { useState } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import itemTypes from "../utils/ItemTypes";
import idGenerator from "../utils/idGenerator";

const Element = ({ type , id }) => {

  //   useDrag
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "Card",
    item: {
      type,
      from: "sidebar"
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
      {/* <DragPreviewImage connect={dragPreview} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScly7lF7rMUrYwtklSxlnJfrHv0Y8nKQMkA&usqp=CAU"} /> */}
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
