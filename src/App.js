import "./App.css";
import blob2 from "./svgs/blob2.svg";
import Container from "./components/Container/Container";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frequency Counter</h1>
        <Container />
      </header>
      <Table />
    </div>
  );
}

export default App;
