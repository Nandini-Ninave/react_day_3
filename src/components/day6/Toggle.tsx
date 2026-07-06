// import { useContext, useState } from "react"
import "./Toggle.css"

import {useState } from "react"
import { ThemeContext } from "./ToggleContext"

function Toggle(){
    const [toggle, settoggle] = useState<boolean|null>(true)
    const handleClick=()=>{
        if(toggle){
            document.documentElement.setAttribute("data-theme", "dark")
            settoggle(false)
        }else{
            document.documentElement.removeAttribute("data-theme")
            settoggle(true)    
        }
    }
    return(
        <div>
            <button onClick={handleClick}>{toggle?"dark":"light"}</button>
            {/* {toggle?<button className="dark" onClick={()=>settoggle(false)}>dark</button>:<button className="light" onClick={()=>settoggle(true)}>light</button>} */}
        </div>  
    )
}
export default Toggle


