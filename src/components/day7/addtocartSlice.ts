import { createSlice } from "@reduxjs/toolkit"

interface AddState{
    arr:any[]
}
const initialState : AddState = {
    arr:[],
}
export const addtocartSlice = createSlice({
    name: "addtocart",
    initialState,
    reducers:{ 
        addtocart:(state, action)=>{
            const {id, title} = action.payload
            console.log(id,title)
            state.arr.push({id,title}) 
            console.log(state.arr)
        }
    }
})
export const {addtocart} = addtocartSlice.actions
export default addtocartSlice.reducer 