import { useEffect, useState } from "react"

function useApi(url:string){
    const[data, setData] = useState([])
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(result=>setData(result))
    },[url])
    return {data}
}
export default useApi