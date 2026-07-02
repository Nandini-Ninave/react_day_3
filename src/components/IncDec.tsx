import { useState } from "react"

function IncDec(){
    const [number, setNumber] = useState<number>(0)
    const [state, setState] = useState<number>(0)
    switch (state){
        case 1:
            setNumber(prev=>prev+1);
            break;
        case 2:
            setNumber(prev=>prev-1)
            break;
    }


    // const inc=()=>{
    //     setNumber(prev=>prev+1)
    // }
    const reset=()=>{
        setNumber(0)
    }
    // const dec=()=>{
    //     setNumber(prev=>prev-1)
    // }
    const even=()=>{
        if(number%2==0){
        setNumber(prev=>prev+2)
        }
        else if(number%2!=0){
        setNumber(prev=>prev+1)
        }
    }
    const odd=()=>{
        if(number==0){
            setNumber(prev=>prev+1)
        }
        else if(number%2==0){
            setNumber(prev=>prev+1)
        }
        else if(number%2!=0){
            setNumber(prev=>prev+2)
        }
    }
    return(
        <div>
            <p>{number}</p>
            <button onClick={()=>setState(1)}>inc</button>
            <button onClick={()=>setState(2)}>dec</button>
            {/* <button onClick={inc}>increase</button> */}
            {/* <button onClick={dec}>decrease</button> */}
            <button onClick={reset}>reset</button>
            <button onClick={even}>even</button>
            <button onClick={odd}>odd</button>
        </div>
    )
}
export default IncDec