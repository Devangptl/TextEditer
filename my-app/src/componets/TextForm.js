import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        console.log("Uppercase is run")
        setText(text.toUpperCase())
    }

    const handleLOclick = () =>{
        console.log("Lowercasre is run")
        setText(text.toLowerCase())

    }
    
    const titleCase = () => {
        console.log("Title text is run")
        setText(text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())
    }

    const copyText = () => {
        let text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const extraSpace = () => {
        let rSpace = text.split(/[ ]+/)
        setText(rSpace.join(" "))
    }

    const clearText = () => {
        console.log("Clear text is run")
        let clear = "";
        setText(clear)
    }

    
    

    const handleOnchange = (event) =>{
        // console.log("handle On change")
        setText(event.target.value)
        }  
    
    const [text , setText] = useState("")

    return (
        <>
            <h1>{props.hadinng}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} placeholder={"Enter the text here"} onChange={handleOnchange} id="myBox" rows="10"></textarea>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleUpclick}>Alphabetical Text</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleLOclick}>Lowercase Text</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={titleCase}>Title Text</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={extraSpace}>Remove Extra Space</button>
                <button type="button" className="btn btn-danger my-3 mx-1" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container">
                <h3>Your text Summary</h3>              
                <li><b>{0.0067 *text.length} </b>Time to Read</li>
                <li><b>{text.split(" ").length - 1}</b> word </li>
                <li><b>{text.split(".").length - 1}</b> Sentence</li>
                <li><b>{text.length}</b> character</li>

               <h3 className="my-3">Prewive</h3>
                <p>{text}</p>
            </div>

        </>
    )
}
