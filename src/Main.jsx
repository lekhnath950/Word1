import React, { useState } from 'react'
import './index.css'

export default function Main() {
    const [data, setData] = useState("")

    const handleChange = (e) => {
        setData(e.target.value)
        // console.log(e.target.value)
    }

    const downloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([data], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        const nam = Date.now();
        console.log(nam)
        const reversedString = nam.toString().split('').reverse().join('');
        console.log(reversedString)
        const reversedNumber = parseInt(reversedString, 10);
        const roundedNumber = Math.round(reversedNumber / 993993354);
        console.log(roundedNumber)
        element.download =  roundedNumber ;
        document.body.appendChild(element); // Required for Firefox
        element.click();
        document.body.removeChild(element);
    };

    const wordCount = data.trim() === '' ? 0 : data.trim().split(/\s+/).length;
    
    return <>
    <div className="container">
        <h1>Type your Text</h1>
        <form>
            <textarea type="text" onChange={(e) => handleChange(e)} placeholder="Start Typing...." />
        </form>
        {
            data && 
        <a href='#' onClick={downloadText}>
            Convert your text to file
        </a>

        }
        <p>{data.length} characters and {wordCount} Words  </p>
        <p>{data.split("a").length -1 + " a characters" }</p>
        
    </div>
    </>

}