import "./App.css";
import SearchBar from "./component/Search/SearchBar";
import NavBar from "./component/NavBar/NavBar";
import CardList from "./component/CardList/CardList";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <SearchBar />
        <CardList />
      </div>
    </>
  );
}

export default App;
