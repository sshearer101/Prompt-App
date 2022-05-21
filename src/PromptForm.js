import React, {useState} from "react"

export default function PromptForm({addPrompt}){
    const [data, setData] = useState('')


    function onSubmit(e){
        e.preventDefault()
        addPrompt(data)
    }
    return(
        <div>
            <form onSubmit={onSubmit} >
            <h1>Fun with AI</h1>
            <h2>Enter Prompt</h2>
            <input 
                type="text"
                placeholder="Enter a prompt..."
                className="input-box"
                value={data}
                onChange={(e) => setData(e.target.value)}
            >
            </input>
            <input
                type="submit"
                name="submit"
                value="Create New Prompt"
                className="submit"
            >
            </input>
            </form>
        </div>
    )
}