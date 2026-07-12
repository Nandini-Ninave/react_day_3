// useform - register and handleSubmit

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { signup } from "./signup"
import { useContext, useState } from "react"
import { AuthContext } from "./day6/Context"

function Formcomp(){
    
  const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(signup)})
  const [data, setData] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userEmail = useContext(AuthContext)
  const userPassword = useContext(AuthContext)
  const [login, setLogin] = useState(false)
  // console.log(email,password)
  // console.log(userEmail,userPassword)
  const onsubmit=(data:any)=>{
    if(email===userEmail?.email && password===userPassword?.password){
      setData(data)
      setLogin(true)
      console.log("login success")
      console.log(data)
    }
    else{
      console.log("Login failed")
    }
  }
  const logout=()=>{
    if(login){
      setData("")
      // console.log(data)
    }else{
      console.log("not login")
    }
  }
  return(
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
          <input type="text" placeholder="Enter username" {...register("username")}></input>
          {errors.username && <p>{errors.username.message}</p>}
          <input type="email" placeholder="Enter email" {...register("email")} onChange={(e)=>setEmail(e.target.value)}></input>
          {errors.email && <p>{errors.email.message}</p>}
          <input type="password" placeholder="Enter password" {...register("password")} onChange={(e)=>setPassword(e.target.value)}></input>
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit">login</button>
      </form>
      <button type="submit" onClick={logout}>logout</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
export default Formcomp

