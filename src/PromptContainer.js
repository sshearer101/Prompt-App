import Prompt from './Prompt'

export default function PromptForm({prompts}){
    return(
        <div>
            {prompts.map((prompt)=> (
                <Prompt 
                    key={prompt.id}
                    prompt={prompt}
                />
            ))}
        </div>
    )
}