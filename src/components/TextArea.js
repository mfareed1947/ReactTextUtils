import React, { useState } from 'react'

export default function TextArea(props) {

    // uppercase change function
    const handleUpCase = () => {
        console.log("text change in to uppercase");
        const newText = text?.toUpperCase();
        textupdate(newText)
        props.showAlert("converted to uppercase!","success")

    }

    // lowercase change function
    const handleLowerCase = () => {
        console.log("text change in to Lowercase");
        const newText = text.toLowerCase();
        textupdate(newText)
        props.showAlert("converted to lowerase!","success")
    }

    // clear  function
    const handleClear = () => {
        const newText = "";
        textupdate(newText)
        props.showAlert("cleared all text!","success")
    }

    // captiallize change function
    const handleCap = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        textupdate(newText);
        props.showAlert("converted to captalize!","success")
    }

    // copy text function
    const handleCopy = () => {
        let newText = document.getElementById("exampleFormControlTextarea1")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("copy to clipboard!","success")
    }

    const ExSpacRemove = () => {
        let newText = text.split(/[ ]+/)
        textupdate(newText.join(" "))
        props.showAlert("Extra spaces removed!","success")

    }

    // on change function
    const changeText = (event) => {
        console.log("on click text")
        textupdate(event.target.value)
    }

    const [text, textupdate] = useState();
    // console.log(text)

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
                <h1> <i>{props.heading}</i> </h1>
                <div className="">
                    <textarea className="form-control" value={text} onChange={changeText} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : "white", color: props.mode === 'dark' ? 'white' : "black" }} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary mx-2 my-3" onClick={handleUpCase}>convert to UpCase</button>
                    <button className="btn btn-dark mx-2 my-3" onClick={handleLowerCase}>convert to lowercase</button>
                    <button className="btn btn-danger mx-2 my-3" onClick={handleClear}>Clear</button>
                    <button className="btn btn-warning mx-2 my-3" onClick={handleCap}>capitalize</button>
                    <button className="btn btn-warning mx-2 my-3" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-info mx-2 my-3" onClick={ExSpacRemove}>Extra Space Remove</button>
                </div>
                <div className="container my-3">
                    <h2>your summary text</h2>
                    <p>{text?.split(" ").length} <b>words</b> and {text?.length} <b>characters</b></p>
                    <p>{0.008 * text?.split(" ").length} Minutes </p>
                    <h2>Preview</h2>
                    <p>{text?.length>0?text:'enter a text in box and preview the value'}</p>

                </div>
            </div>


        </>
    );
}
