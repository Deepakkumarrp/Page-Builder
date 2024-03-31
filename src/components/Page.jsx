import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import Modal from "./Modal";
// import ElementRenderer from "./ElementRenderer";

const Page = ({ children }) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements,setElements] = useState([]);
  const [modalType, setModalType] = useState({
    type: "",
    x: 30,
    y: 30
  });

  const [{isOver}, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item,monitor) => {
        const mousePosition = monitor.getClientOffset();
        const { x, y } = mousePosition;
        handleModalOpen(item.type,x,y)
        
        // setIsModalOpen(true);
        console.log('Element dropped at:', x, y);

        const newElement = { type: item.type, x, y };
        // Call a function to handle adding the new element to the state
        handleAddElement(newElement);
    },
    
    collect: (monitor) => ({
        isOver: !!monitor.isOver()
    })
  }));

  function handleModalOpen (type, x,y) {
    setModalType({
        type: type,
        x :x,
        y :y,
    })
    setIsModalOpen(true);
  }
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

        {/* Render Modal */}
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} modalType={modalType} handleAddElement={handleAddElement} />

      {/* Render the elements */}
      {/* {elements.map((element, index) => (
        <ElementRenderer key={index} config={element} />
      ))} */}

    </div>
  );
};

export default Page;
