import "./App.css";
import { useState, useEffect } from "react";
import translate from "translate";
function App() {
  const [word, setWord] = useState("");

  translate.engine = "yandex";
  translate.key =
    "dict.1.1.20221212T083701Z.c2bbe382da8f77b4.f64d3eb19797d69dee83980d8babb9c06ec8bfb9";

  const fetchData = async () => {
    const response = await fetch(`https://random-word-api.herokuapp.com/word`);
    const newData = await response.json();
    console.log(newData);
    defention(newData[0]);
    setWord(newData[0]);
  };

  const defention = async (word) => {
    console.log("dev");
    fetch("https://developers.lingvolive.com/api/v1/authenticate", {
      // fetch('https://developers.lingvolive.com/api/v1/Translation', {
      // api/v1.1/authenticate
      method: "POST",
      // mode: "no-cors",
      // credentials: 'include',
      headers: new Headers({
        'Content-Length': 0,
        'Accept': '*/*',
        Authorization:
          `"Basic " +"MWIzNzNmYmUtZmI0MC00MTZkLTk4MjgtYTI4NWRhNTdjYzEwOjA5MGYzNjhlODM5YjQzODE4NGJkMWYwODliMTEzOTYx"`,
      }),
    }).then(response => {console.log(response.json()); response.json()});
  };

  useEffect(() => {
    fetchData();
    defention(word);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {word}
        <div>
          <button onClick={() => fetchData()}>Next word</button>
        </div>
      </header>
    </div>
  );
}

export default App;