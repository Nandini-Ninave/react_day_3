import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Protectedroute=()=>{
    // let auth = {'token':false}
    const token = true
    const navigate = useNavigate()
    useEffect(()=>{
        (token?<Outlet/>:(navigate("/home")))
    },[])
    return(
        <div><Outlet/></div>)
}
export default Protectedroute

// const Protectedroute=()=>{
//     let auth = {'token':false}
//     const navigate = useNavigate()
//     return(
//         // <div>protected</div>

//         <>{auth.token?navigate("/about"):navigate("/")}</>
        // <div>{auth.token?"true":"false"}</div>
//     )
// }
// export default Protectedroute
