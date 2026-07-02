import { useParams } from "react-router-dom"

function Person(){
    const {firstName} = useParams()
    return(<div>Name: {firstName}</div>)
}
export default Person