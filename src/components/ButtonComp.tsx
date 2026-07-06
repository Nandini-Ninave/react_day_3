type Buttoncomp={
    label:string,
    backgroundColor?:string
}

function ButtonComp(props:Buttoncomp){
    return(
        <div>
            <button>{props.label}</button>
        </div>
    )
}
export default ButtonComp