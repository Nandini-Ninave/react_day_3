type TextInput={
  label?:string,
  placeholder?:string,
  backgroundColor?:string,
}
function TextInput(props: TextInput){
  return(
    <div style={{backgroundColor:props.backgroundColor}}>
      <label>{props.label}</label>
      <input type="text" id={props.label}/>
    </div>
  )
}
export default TextInput