// useform - register and handleSubmit

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { signup } from "./signup"
import { useState } from "react"

function Formcomp(){
    
  const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(signup)})
  const [data, setData] = useState("")
  const onsubmit=(data:any)=>{
    setData(data)
    console.log(data)
  }
  return(
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
          <input type="text" placeholder="Enter username" {...register("username")}></input>
          {errors.username && <p>{errors.username.message}</p>}
          <input type="email" placeholder="Enter email" {...register("email")}></input>
          {errors.email && <p>{errors.email.message}</p>}
          <input type="password" placeholder="Enter password" {...register("password")}></input>
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit">submit</button>
      </form>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
export default Formcomp

