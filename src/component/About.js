import React ,{useState} from "react"

export default function About() {
    const [myStyle,setmyStyle]=useState({
        color:"black",
        backgroundColor:"white"
    });

    const [text,setText]=useState("Enable dark mode")



    const DarkMode=()=>{
            if(myStyle.color==="black"){
                setmyStyle({
                    color:"white",
                    backgroundColor:"black",
                    border:"1px solid white"
                })
                setText("Enable light mode")
            }
            else{
                setmyStyle({
                    color:"black",
                    backgroundColor:"white"
                })
                setText("Enable dark mode")
            }
    }
  return (
    <div className='container my-3' style={myStyle} >
    <h1>About us</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingOne">
      <button style={myStyle} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div style={myStyle} id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={myStyle} class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div style={myStyle} id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div  class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2  class="accordion-header" id="headingThree">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div style={myStyle} id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div  class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
  <button onClick={DarkMode} type="button" class="btn btn-primary">{text}</button>  
    </div>
  )
}
