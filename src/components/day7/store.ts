import { configureStore } from "@reduxjs/toolkit";
import  addtocartSliceReducer  from "./addtocartSlice";


export const store = configureStore({
    reducer:{
        addtocart: addtocartSliceReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch = typeof store.dispatch