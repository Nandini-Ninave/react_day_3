import { createContext, useState } from "react";
import UseContext from "./UseContext";
import Toggle from "./Toggle";

type Authuser={
    email:string,
    password:string
}

export const AuthContext = createContext<Authuser|null>(null)
const AuthProvider = () => {
    const [user, setuser] = useState<Authuser>({email:"parininave@gmail.com", password:"pari"})
    return(<AuthContext.Provider value={user}>
        <UseContext/> 
    </AuthContext.Provider>)
}

export default AuthProvider 
 
