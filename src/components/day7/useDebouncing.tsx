
function useDebouncing(fn:any, delay:number){
    let time:ReturnType<typeof setTimeout>;
    return function(this:any){
        clearTimeout(time)
        time = setTimeout(() => {
            fn.apply(this)
    }, delay);
    }
    
}
export default useDebouncing