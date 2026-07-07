import useDebouncing from "./useDebouncing";
import useApi from "../useApi";

function Debouncing(){
    const {data} = useApi("https://fakestoreapi.com/products")
    function api():void{
        console.log(data)
    }
    const res = useDebouncing(api, 1000)
    res()
    return(
        <div>
            {/* <p>{result.title}</p> */}
        </div>
    )
}
export default Debouncing  