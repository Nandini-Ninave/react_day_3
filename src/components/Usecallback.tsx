import { useCallback, useState } from "react"

function Usecallback(){
    const[count, setCount] = useState<number>(0)
    let num = 0
    // const inc=()=>{
    //     setCount(count+1)
    //     num++
    // }

    const inc=useCallback(()=>{
        setCount(count+1)
        // num++
    },[count])
    // console.log(inc)
    return(<div>
        <p>{count}</p>
        <p>{num}</p>
        {/* <button onClick={inc}>click</button> */}
        <Childcomp inc = {inc}/>
    </div>

    )
}
export default Usecallback


// function Childcomp({inc}:{inc:()=>void}){
//     return(<button onClick={inc}>inc</button>)
// }

// function Childcomp = React.memo({inc}:{inc:()=>void})=>{
//     return(<button onClick={inc}>inc</button>)
// }