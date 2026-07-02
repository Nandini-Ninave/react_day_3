import { Link, Outlet } from "react-router-dom"

function About (){
    return(<div>
        <h2>About</h2>
        <nav>
            <Link to="/about/abouthome">home</Link>
            <Link to="/about/contact">contact</Link>
        </nav>
        <Outlet/>
    </div>)
}
export default About