import "./App.css";
import Card from "./component/Card/Card";
import SearchBar from "./component/Search/SearchBar";
import { data } from "./data/data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <SearchBar />
      <Card data={data} />
    </div>
  );
}

export default App;
