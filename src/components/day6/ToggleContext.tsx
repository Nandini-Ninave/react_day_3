import { createContext, useState } from "react"
import Toggle from "./Toggle"

interface Theme{
    background:string,
    color:string
}
const light: Theme={
    background:"#fff",
    color:"#000"
}
const dark:Theme={
    background:"#000",
    color:"#fff"
}

// type Themeprop = "light"|"dark"
interface themecontext{
    theme:Theme,
    toggletheme:()=>void
}
export const ThemeContext = createContext<themecontext|null>(null)
const Context=()=>{
    const [theme,setTheme] = useState<Theme>(light)
    const toggletheme=():void=>{
        setTheme((prev)=>(prev===light?dark:light))
    }
    return(<ThemeContext.Provider value={{theme, toggletheme}}>
        <Toggle/>
    </ThemeContext.Provider>)
}
export default Context
