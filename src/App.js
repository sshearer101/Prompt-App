import {useEffect, useState} from "react";
import PromptForm from "./PromptForm";
import PromptContainer from "./PromptContainer"
import "./App.css";

function App() {
  const [prompts, setPrompts] = useState([])

  const API = 'http://localhost:3001/api'
  const headers = {
    Accepts: 'application/json',
    'Content-type': 'application/json',
  };

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((prompts) => setPrompts(prompts));
  }, []);


  function addPrompt(prompt){
    fetch(API, {
      method: 'POST',
      body: JSON.stringify(prompt),
      headers,
    })
    .then((res) => res.json())
    .then((json) => setPrompts([...prompts, json]))
  }

  return (
    <div className="App">
        <PromptForm addPrompt={addPrompt}/>
        <PromptContainer prompts={prompts} />
    </div>
  );
}

export default App;