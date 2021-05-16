import { useState } from "react";
// import blob2 from "./svgs/blob2.svg";
import Container from "./components/Container/Container";
import Tables from "./components/Table/Table";

import axios from "./axios";

import "./App.css";

function App() {
  const [wordCount, setWordCount] = useState([]);
  const [value, setValue] = useState();

  function WordCounter(text) {
    var frequency = {};
    var wordCount = [];
    var wordArray = text.toLowerCase().split(/\W+/);
    wordArray.forEach((key) => {
      frequency.hasOwnProperty(key)
        ? (frequency[key] += 1)
        : (frequency[key] = 1);
    });

    wordCount = Object.keys(frequency).map((key) => {
      return {
        word: key,
        count: frequency[key],
      };
    });

    wordCount.sort((a, b) => b.count - a.count);
    wordCount.pop();
    setWordCount(wordCount);
  }

  async function fetchData() {
    const request = await axios.get(
      "https://raw.githubusercontent.com/invictustech/test/main/README.md"
    );

    WordCounter(request.data);
    return request;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frequency Counter</h1>
        <Container fetchData={fetchData} sendValue={setValue} />
      </header>
      <h1>Top {value} most frequently occurring words ⇒</h1>
      <Tables wordCount={wordCount} value={value} />
    </div>
  );
}

export default App;
