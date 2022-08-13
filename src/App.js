import React from "react";
import { BrowserRouter } from "react-router-dom";

// pages
import Landing from "./pages/Landing";

// components
import Nav from "./components/Nav";

// style
import "../src/styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="App">
          <header className="App-header">
            <Landing />
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
