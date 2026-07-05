import { string } from "yup"

type ButtonComp = {
    backgroundColor?:string,
    label?:string,
    border_radius?:string
}
function ButtonComp(props:ButtonComp){
    return(
        <div><button style={{backgroundColor:props.backgroundColor, borderRadius : props.border_radius}}>{props.label}</button></div>
    )
}
export default ButtonComp