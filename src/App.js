import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "react-graph-vis";
import Markov from "ez-markov";

function App() {
  const [corpus, setCorpus] = useState("");
  return (
    <div className="flex-container">
      <InputText setCorpus={setCorpus} />
      <DisplayGraph corpus={corpus} />
    </div>
  );
}

function InputText(props) {
  const [text, setText] = useState("");
  const { setCorpus } = props;
  return (
    <div className="input-container">
      <textarea
        placeholder="input text"
        className="input-field"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      ></textarea>
      <br />
      <button
        className="input-button"
        onClick={() => {
          setCorpus(text);
        }}
      >
        render graph
      </button>
    </div>
  );
}

const DisplayGraph = React.memo(props => {
  const { corpus } = props;
  const chain = new Markov();
  chain.addCorpus(corpus);
  const result = chain.export();
  return (
    <Graph
      graph={result}
      className="display-graph"
      key={Math.random()}
      options={{ height: "800px" }}
    />
  );
});

export default App;
