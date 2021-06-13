import React, { createContext, useState } from "react";
import NavBar from "./component/NavBar/NavBar";
import "./App.css";
import Routes from "./routes";

export const SearchContext = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <NavBar />
      <div className="App">
        <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
          <Routes />
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
