import React, { useEffect, useState } from "react";

const ExportButton = () => {

    const handleExport = () => { 
    const elements = JSON.parse(localStorage.getItem("elements"));
    const json = JSON.stringify(elements, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page_config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return <button className="exportBtn" onClick={handleExport}>Export</button>;
};

export default ExportButton;
