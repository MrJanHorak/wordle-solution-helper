import React from "react";

// pages
import Landing from "./pages/Landing";

// components
import Nav from "./components/Nav";

// style
import "../src/styles/App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <Landing />
        </header>
      </div>
    </>
  );
}

export default App;
