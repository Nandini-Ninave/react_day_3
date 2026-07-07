import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./Routes"
// import Context, { UserContext } from "./components/day6/Context"
import Toggle from "./components/day6/Toggle"
import Context from "./components/day6/Context"
import Debouncing from "./components/day7/Debouncing"

function App(){
  const router = createBrowserRouter(routes)
  return(
    <div>
      {/* <Debouncing/> */}
      {/* <Context/> */}
      {/* <Toggle/> */}
     <RouterProvider router={router}></RouterProvider>
    </div>
    )
}
export default App