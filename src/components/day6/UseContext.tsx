import { useContext } from "react";
import { AuthContext } from "./Context";
import Formcomp from "../Formcomp";

function UseContext(){
    const email = useContext(AuthContext)
    const password = useContext(AuthContext)
    return(
        <div>
            <p>Email:{email?.email}</p>
            <p>password:{password?.password}</p>
            <Formcomp/>
        </div>
    )
}
export default UseContext