import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Topbar />
        <h1 className="text-xl font-bold">Main Content Area</h1>
      </div>
    </div>
  );
}

export default App;
