import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import Modal from "./Modal";
import ElementRenderer from "./ElementRenderer";
import idGenerator from "../utils/idGenerator";

const Page = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements, setElements] = useState([]);
  const [config, setConfig] = useState({
    id: "",
    type: "",
    x: 30,
    y: 30,
    fontWeight: 400,
    fontSize: 16,
    text: "",
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item, monitor) => {
      console.log(item);
      console.log(item.from);
      const mousePosition = monitor.getClientOffset();
      const { x, y } = mousePosition;
      if (item.from === "sidebar") {
        const id = idGenerator();
        handleModalOpen(item.type, x, y, id);
      } else if (item.from === "page") {
        const updatedElement = { ...item.config, x, y };
        handleUpdateElement(updatedElement);
        console.log("Update:",elements)
      }
    },

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function handleModalOpen(type, x, y, id) {
    setConfig({
      ...config,
      id: id,
      type: type,
      x: x,
      y: y,
    });
    setIsModalOpen(true);
  }

  // Add
  const handleAddElement = (newElement) => {
    const present = elements.filter((el) => el.id == newElement.id);
    console.log("present:",present)
    if(present.length >= 1) {
      return handleUpdateElement(newElement);
    }else{
      return setElements([...elements, newElement]);
    }
  };

  // Update
  const handleUpdateElement = (updatedElement) => {
    setElements((prevElements) => {
      const updatedElements = prevElements.map((element) =>
        element.id === updatedElement.id ? updatedElement : element
      );
      return updatedElements;
    });
  };

  // Delete
  const handleDeleteElement = (id) => {
    const filteredElements = elements.filter((element) => element.id !== id);
    setElements(filteredElements);
  };

  const handleAllElements = () => {
    console.log(elements);
  };
  return (
    <div
      className="page"
      ref={drop}
      style={{
        backgroundColor: isOver ? "red" : "green",
      }}
      // ref={(node) => drag(drop(node))}
    >
      {/* <h1>Page</h1> */}
      <button onClick={handleAllElements}>watch all Elements</button>
      {/* {children} */}

      {/* Render Modal */}
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

      {/* Render the elements */}

      {elements.length > 0 &&
        elements.map((element, i) => {
          return (
            <ElementRenderer
              key={i}
              config={element}
              handleElement={{
                elements,
                handleAddElement,
                handleUpdateElement,
                handleDeleteElement,
              }}
            />
          );
        })}
    </div>
  );
};

export default Page;
