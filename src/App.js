import React, { createContext, useState } from "react";
import SearchBar from "./component/Search/SearchBar";
import NavBar from "./component/NavBar/NavBar";
import CardList from "./component/CardList/CardList";
import "./App.css";

export const SearchContext = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <NavBar />
      <div className="App">
        <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
          <SearchBar />
          <CardList />
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
