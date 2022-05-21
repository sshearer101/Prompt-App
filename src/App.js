import {useEffect, useState} from "react";
import PromptForm from "./PromptForm";
import PromptContainer from "./PromptContainer"
import "./App.css";


function App() {
  const [prompts, setPrompts] = useState([])


  const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };
   

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
    // fetch(API, {
    //   method: 'POST',
    //   body: JSON.stringify(prompt),
    //   headers,
    // })
    // .then((res) => res.json())
    // .then((json) => setPrompts([...prompts, json]))

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
 },
 body: JSON.stringify(data),
});
    // setPrompts([...prompts, prompt])
    }

  console.log(prompts)

  return (
    <div className="App">
        <PromptForm addPrompt={addPrompt}/>
        <PromptContainer prompts={prompts} />
    </div>
  );
}

export default App;