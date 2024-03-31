import React, { useState } from "react";
// import CreateElement from "./ElementRenderer";

const Modal = ({ isOpen, handleClose, modalType, handleAddElement }) => {
    if (!isOpen) return null;
    const [config, setConfig] = useState({
            type: modalType.type,
            x: modalType.x,
            y: modalType.y,
            fontSize : 16,
            fontWeight: 400,
            text: ""
    });
    console.log(config);

  function handleSave(e) {
    e.preventDefault();
    console.log("clicked",e)
    console.log(config)
    // handleAddElement();
    handleClose();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
    console.log(config)
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
            <button onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
