import React from "react";

import Home from "./pages/Home";
import About from "./pages/About"
import Navbar from "./components/Navbar"
import './App.css';
import "bulma/css/bulma.min.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Home />
      	<About />
      </div>
    </>
  );
}
export default App;
