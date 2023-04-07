import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("omkar");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase","success");
    }

    const handleLoClick=()=>{
        // console.log("omkar");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase","success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

   const handleClearText=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text is cleard","success");
   }

    const [text,setText]=useState("Enter the Text Here");


  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
    <h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.headings}</h1>
      <div className='mb-3'>
      <textarea className='form-control' value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
     </div>
     <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert To Uppercase</button>
     <button className='btn btn-primary mx-1' onClick={handleLoClick} >Convert To Lowercase</button>
     <button className='btn btn-primary mx-1' onClick={handleClearText} >Clear Text</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1 style={{color:props.mode==="dark"?"white":"black"}}>Your text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        
        <p>{0.008 * (text.split(" ").length)} minutes</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  )
}
