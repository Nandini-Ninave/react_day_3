import { lazy, Suspense } from "react"
// import UseEffectComp from "./UseEffectComp"

function LazyLoading(){
    const Products = lazy(()=>import("./UseEffectComp"))
    return(
        <div>
            <Suspense fallback={<p>Loading</p>}>
                <div><Products/></div>
            </Suspense>
        </div> 
    )
}
export default LazyLoading