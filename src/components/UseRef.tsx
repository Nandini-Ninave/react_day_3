import { useEffect, useRef, useState } from "react"
import { useFormState } from "react-hook-form"

// function UseRef(){
//     const inputfield = useRef<null|HTMLInputElement>(null)
//     const handleClick=()=>{
//         // console.log("clicked")
//         if(inputfield.current){
//             inputfield.current.focus()
//         }
//         // console.log("focus")
//     }
//     return(<div>
//         <input placeholder="Enter something..." ref={inputfield}></input>
//         <button onClick={handleClick}>click</button>
//     </div>)
// }
// export default UseRef


    function UseRef(){
        const [num, setNum] = useState(0)
        const myref = useRef(0)
        const count = useRef(0);
        useEffect(()=>{
            //without re-rendering it store previous state
            count.current = count.current+1
            myref.current = num
        },[num])
        return(<div>
            <p>{num}</p>
            <p>{myref.current}</p>
            <button onClick={()=>setNum(num+1)}>click</button>
            <p>render : {count.current}</p>
        </div>)
    }
    export default UseRef

// function UseRef(){
//     const myRef = useRef<null|HTMLDivElement>(null)
//     const [dim,setDim] = useState<DOMRect | null>(null);
//     useEffect(()=>{
//         if(myRef.current){
//             const res = myRef.current.getBoundingClientRect()
//             setDim(res)
//             console.log(res)
//         }
//     },[]) 
//     return(<div>
//             <div ref={myRef}>target </div>
//             {dim && <p>Height: {dim.height} width:{dim.width}</p>}
//         </div>
//     )
// }
// export default UseRef