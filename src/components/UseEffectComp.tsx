import { useEffect, useState } from "react"

function UseEffectComp(){
    const[count, setCount] = useState(0)
    useEffect(()=>{
        console.log("useEffect")
    },[count])
    return(<div>
        {/* {count} */}
        <button onClick={()=>setCount((c)=>c+1)}></button>
        {count}
    </div>)
}
export default UseEffectComp