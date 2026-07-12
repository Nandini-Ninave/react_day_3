// import { useEffect, useState } from "react"

import { useEffect, useMemo, useState } from "react";
import Loadingcomp from "./Loadingcomp";
import useApi from "./useApi";
// import "./useEffect.css"
import { useAppDispatch } from "./day7/hook";
import { addtocart } from "./day7/addtocartSlice";
import {Card, Button} from "@mui/material";
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
    const {data} = useApi("https://fakestoreapi.com/products")
    const [option, setOption] = useState<string>("")
    const arr = useState([])
    const dispatch = useAppDispatch()
    const mincount = 300
    //sorted products 
    const sortedProducts = useMemo(()=>{
        if(option=="sorted"){
            return data.sort((a,b)=>a.price-b.price)
        }
        else if(option=="filtered"){
            return data.filter(product=>product.rating.count>mincount)
        } 
    },[data, data.price, option]) 
    return(
        <div>

            <select onChange={(e)=>setOption(e.target.value)}>
                <option value={"sorted"}>sorted</option>
                <option  value={"filtered"}>filtered</option>
            </select>

            {option=="filtered"?<>{sortedProducts.map((item)=>{
                return(<p>{item.title} - {item.rating?.count}--{item.price}</p>)
            })}</> : 
             <>{data.map((item:any,index)=>{
                return(<div className="card"key={index}>
                     <Card 
              sx={{
                height:"10%",
                width:"40%",
                marginTop:"20px",
                border:"1px solid black",
                display:"flex",
                flexDirection:"column",
                background:"#bee0e0"
              }}
            ><p >Id: {item.id}</p>
                        <p>Title: {item.title}</p>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.description}</p>
                        <p>Category: {item.category}</p>
                        <p>Rate: {item.rating?.rate}</p>
                        <p>Count: {item.rating?.count}</p>
                    <Button color="primary" variant="contained" fullWidth onClick={()=>dispatch(addtocart({ id:item.id, title:item.title}))}>Add To Cart</Button>


            </Card>
                        
                    </div>)
            })}</> }
            
           
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