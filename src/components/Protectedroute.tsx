import { Outlet, useNavigate } from "react-router-dom"

const Protectedroute=()=>{
    let auth = {'token':false}
    const navigate = useNavigate()
    return(
        <>{auth.token?<Outlet/>:navigate("/home")}</>
    )
}
export default Protectedroute

// const Protectedroute=()=>{
//     let auth = {'token':false}
//     const navigate = useNavigate()
//     return(
//         // <div>protected</div>

//         <>{auth.token?navigate("/about"):navigate("/")}</>
//         // <div>{auth.token?"true":"false"}</div>
//     )
// }
// export default Protectedroute
