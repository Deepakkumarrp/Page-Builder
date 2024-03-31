import React, { createContext, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import Modal from "./Modal";
import ElementRenderer from "./ElementRenderer";
import idGenerator from "../utils/idGenerator";

const Context = createContext();

const Page = () => {
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

  useEffect(() => {
    // Load elements data from local storage on component mount
    const storedElements = JSON.parse(localStorage.getItem("elements")) || [];
    setElements(storedElements);
  }, []);

  useEffect(() => {
    // Save elements data to local storage whenever it changes
    localStorage.setItem("elements", JSON.stringify(elements));
  }, [elements]);

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
        console.log("Update:", elements, updatedElement);
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
    console.log("present:", present);
    if (present.length >= 1) {
      return handleUpdateElement(newElement);
    } else {
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

  // Function to see all elements on console
  // const handleAllElements = () => {
  //   console.log(elements);
  // };

  return (
    <Context.Provider value={{elements,handleAddElement,handleDeleteElement,handleUpdateElement}} >
    <div
      className="page"
      ref={drop}
      style={{
        backgroundColor: isOver ? "#ccc" : "#f2f2f2",
      }}
    >
      {/* <button onClick={handleAllElements}>watch all Elements</button> */}


      {/* Render Modal */}
      <Modal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        modalType={config}
      />

      {/* Render the elements */}

      {
        elements.map((element, i) => {
          return (
            <ElementRenderer
              key={element.id}
              config={element}
            />
          );
        })}
    </div>
     </Context.Provider>
  );
};

export default Page;
export {Context}
