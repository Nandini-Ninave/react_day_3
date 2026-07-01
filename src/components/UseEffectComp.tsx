import { useEffect, useState } from "react"

function UseEffectComp(){
    const[data, setData] = useState([])
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products').then((res)=>{setData(res.json)})
        // console.log(data)


        async function fetchData() {
            try{
                const res = await fetch('https://fakestoreapi.com/products')
                const result = await res.json()
                setData(result)
                console.log(result)
            }
            catch(err){
                console.log(err)
            }
        }
    fetchData()
    },[])
    return(<div>
        {data.map((element:any)=>{
            return(<p>{element.title}</p>)
        })}
        {/* <p>{data.id}</p> */}
    </div>)
}
export default UseEffectComp