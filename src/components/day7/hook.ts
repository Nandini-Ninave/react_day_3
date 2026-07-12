import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
// console.log(useAppDispatch)
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
// console.log(useAppSelector)  