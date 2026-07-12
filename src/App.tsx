import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./Routes"
// import Context, { UserContext } from "./components/day6/Context"
import Toggle from "./components/day6/Toggle"
import Context from "./components/day6/Context"
import Debouncing from "./components/day7/Debouncing"

import IncDec from "./components/IncDec"
import UseRef from "./components/UseRef"
import Usecallback from "./components/Usecallback"
import LazyLoading from "./components/LazyLoading"
import TextInput from "./components/TextInput"
import ButtonComp from "./components/ButtonComp"
// import Navlink from "./components/Navlink"
function App(){
  const router = createBrowserRouter(routes)
  return(
    <div>
      {/* <Debouncing/> */}
      {/* <Context/> */}
      {/* <Toggle/> */}
     <RouterProvider router={router}></RouterProvider>
    </div>
    // <div>
      // <TextInput label="name" backgroundColor="pink"/>
      // <ButtonComp label="click" backgroundColor="pink"/>
    // </div>
    )
}
export default App