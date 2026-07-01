import { useEffect, useState } from "react"

function UseEffectComp(){
    const[count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount(count=>count+1)
        }, 1000);
    },[])
    return(<div>
        {count}
    </div>)
}
export default UseEffectComp