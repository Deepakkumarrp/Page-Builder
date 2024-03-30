import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import Modal from "./Modal";

const Page = ({ children }) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements,setElements] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item,monitor) => {
        console.log("Item: ",item);
        console.log("MOnitor: ",monitor);
        setIsModalOpen(true);
        const mousePosition = monitor.getClientOffset();
        const { x, y } = mousePosition;
        // Here you can open your modal for configuration
        console.log('Element dropped at:', x, y);
        // You can also update your state to render the element at the dropped position

        const newElement = { type, x, y };
        // Call a function to handle adding the new element to the state
        handleAddElement(newElement);
    },
    
    collect: (monitor) => ({
        isOver: !!monitor.isOver()
    })
  }));

  const handleAddElement = (newElement) => {
    setElements([...elements, newElement]);
  };

  return (
    <div 
        className="page" 
        ref={drop} 
        style={{
        backgroundColor: isOver ? 'red' : 'green'
        }}
        // ref={(node) => drag(drop(node))}

    >
      <h1>Page</h1>
      {children}

      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Page;
