import React, { useState } from "react";
import Modal from "./Modal";
import { DragPreviewImage, useDrag } from "react-dnd";
import itemTypes from "../utils/ItemTypes";

const Element = ({ type, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   useDrag
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "Card",
    item: {
      type,
      id,
    },
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // 		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleOnClick = () => {
    // console.log("clicked");
    // setIsModalOpen(true);
  };
  function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      {/* <DragPreviewImage connect={dragPreview} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScly7lF7rMUrYwtklSxlnJfrHv0Y8nKQMkA&usqp=CAU"} /> */}
      <div
        ref={drag}
        onClick={handleOnClick}
        className={`element ${type}`}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {capFirstLetter(type)}
      </div>
      {/* <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} /> */}
    </>
  );
};

export default Element;
