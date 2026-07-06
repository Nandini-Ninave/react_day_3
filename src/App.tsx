import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./Routes"
// import Context, { UserContext } from "./components/day6/Context"
import Toggle from "./components/day6/Toggle"
import Context from "./components/day6/Context"
function App(){
  const router = createBrowserRouter(routes)
  return(
    <div>
      <Context/>
      <Toggle/>
     <RouterProvider router={router}></RouterProvider>
    </div>
    )
}
export default App