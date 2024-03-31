import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Sidebar />
        <Page />
      </DndProvider>
    </>
  );
}

export default App;
