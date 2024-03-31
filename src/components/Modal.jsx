import React, { useState } from "react";
import idGenerator from "../utils/idGenerator";

const Modal = ({ isOpen, handleClose, modalType, handleElement }) => {
    if (!isOpen) return null;
    const { elements,
            handleAddElement,
            handleUpdateElement,
            handleDeleteElement } = handleElement;

    const [config, setConfig] = useState({
            id: modalType.id ,
            type: modalType.type,
            x: modalType.x,
            y: modalType.y,
            fontSize : modalType.fontSize,
            fontWeight: modalType.fontWeight,
            text: modalType.text
    });
    console.log("Model:", config);

  function handleSave(e) {
    e.preventDefault();
    // const p = elements.filter((el) => el.id === config.id );
    // console.log(p);
    // if(p.length > 0){

    // }
    console.log(config);
    console.log("saved");
    handleAddElement(config);
    handleClose();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h3>Edit {modalType.type}</h3>
        <form action="" onSubmit={handleSave}>
        <div className="form-group">
            <label>
                Text:
                <input type="text" name="text" value={config.text} onChange={handleChange} />
            </label>
        </div>
        <div className="form-group">
            <label>
                X Coordinate:
                <input type="number" name="x" value={config.x} onChange={handleChange} />
            </label>
        </div>
        <div className="form-group">
            <label>
                Y Coordinate:
                <input type="number" name="y" value={config.y} onChange={handleChange} />
            </label>
        </div>
        <div className="form-group">
            <label>
                Font Weight:
                <input type="number" name="fontWeight" value={config.fontWeight} onChange={handleChange} />
            </label>
        </div>
        <div className="form-group">
            <label>
                Font Size:
                <input type="number" name="fontSize" value={config.fontSize} onChange={handleChange} />
            </label>
        </div>
            <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
