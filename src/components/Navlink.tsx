import { NavLink } from "react-router-dom"
import "./Navlink.css"
function Navlink(){
    return(
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">about</NavLink> 
            <NavLink to="/person/pari">person</NavLink>
            <NavLink to="/lazyloading">lazy loading</NavLink>
            <NavLink to="/products">Products</NavLink>
        </div>
    )
}
export default Navlink

{/* <nav>
    <ul> 
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/about">About</Link></li>
    </ul>
</nav> */}

{/* <NavLink to="/" className={({isActive})=>isActive? "text-blue-600":"text-grey-600"}>Home</NavLink>
<NavLink to="/about" className={({isActive})=>isActive? "text-blue-600":"text-grey-600"}>About</NavLink> */}

{/* <NavLink to="/" style={({isActive})=>({color:isActive? "green":"red"})}>Home</NavLink>
<NavLink to="/about" style={({isActive})=>({color:isActive? "green":"red"})}>About</NavLink>  */}
