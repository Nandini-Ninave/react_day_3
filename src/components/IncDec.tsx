import { Fragment, useState } from "react"
import { string } from "yup";

function IncDec(){
    const [number, setNumber] = useState(0)
    const [state, setState] = useState("")
    // const state:string = "inc"
    const fun=()=>{
        switch (state){
            case "inc":
                setNumber(prev=>prev+1);
                break;
            case "dec":
                setNumber(prev=>prev-1)
                break;
        }

    }
    // const inc=()=>{
    //     setNumber(prev=>prev+1)
    // }
    // const reset=()=>{
    //     setNumber(0)
    // }
    // const dec=()=>{
    //     setNumber(prev=>prev-1)
    // }
    // const even=()=>{
    //     if(number%2==0){
    //     setNumber(prev=>prev+2)
    //     }
    //     else if(number%2!=0){
    //     setNumber(prev=>prev+1)
    //     }
    // }
    // const odd=()=>{
    //     if(number==0){
    //         setNumber(prev=>prev+1)
    //     }
    //     else if(number%2==0){
    //         setNumber(prev=>prev+1)
    //     }
    //     else if(number%2!=0){
    //         setNumber(prev=>prev+2)
    //     }
    // }
    return(
        <div>
            
            <p>{number}</p>
            <>{fun}</>
            <button onClick={()=>setState("inc")}>inc</button>
            <button onClick={()=>setState("dec")}>dec</button>
            {/* <button onClick={inc}>increase</button> */}
            {/* <button onClick={dec}>decrease</button> */}
            {/* <button onClick={reset}>reset</button>
            <button onClick={even}>even</button>
            <button onClick={odd}>odd</button> */}
        </div>
    )
}
export default IncDec