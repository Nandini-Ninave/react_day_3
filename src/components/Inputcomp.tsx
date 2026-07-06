type inputcomp={
    label:string,
    placeholder:string,
    backgroundColor:string
}

function Inputcomp(props:inputcomp){
    return(<div>
        <label htmlFor="">{props.label}</label>
        <input placeholder={props.placeholder}></input>
    </div>)
}
export default Inputcomp