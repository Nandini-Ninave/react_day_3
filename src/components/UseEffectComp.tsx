// import { useEffect, useState } from "react"

import { useEffect, useMemo, useState } from "react";
import Loadingcomp from "./Loadingcomp";
interface products{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}
function UseEffectComp(){
    const[data, setData] = useState<products[]>([])
    const mincount = 300
    useEffect(()=>{
            fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(result=>setData(result))
    },[])

    const filteredProducts = useMemo(()=>{
        return data.filter(product=>product.rating.count>mincount)
    }, [data, mincount])

    return(
        <div>
            <>{filteredProducts.map((item)=>{
                return(<p>{item.title} - {item.rating?.count}</p>)
            })}</>
{/*             
            <>{data.map((item)=>{
                return(<p>{item.title}</p>)
            })}</> */}
        </div>  
    )
    
}
export default UseEffectComp


//claenup function 

// function App(){
//     const [count, setCount] = useState(0)
//     useEffect(()=>{
//         const time = setTimeout(()=>{
//             setCount(prev=>prev+1)
//         },1000)
//         console.log("--", time)
//         //cleanu function
//         return ()=>{
//             clearTimeout(time)
//             console.log("clean up")
//         }
//     },[])
//     return(
//         <div>
//             <p>{count}</p>
//             <button onClick={()=>setCount(prev=>prev+1)}></button>
//         </div>
//     )
// }
// export default App



// Fetchind data using async await


// function UseEffectComp(){
//     const[data, setData] = useState<products[]>([])
//     useEffect(()=>{
//          async function fetchData() {
//             try{
//                 const res = await fetch('https://fakestoreapi.com/products')
//                 const result = await res.json()
//                 setData(result)
//                 console.log(result)
//             }
//             catch(err){
//                 console.log(err)
//             }
//         }
//     fetchData()
//     },[])
//      return(<div>
//         {/* <Loadingcomp></Loadingcomp> */}
//         {data.map((element)=>{
//             return(<p>{element.title}</p>)
//         })}
//     </div>)
// }
// export default UseEffectComp