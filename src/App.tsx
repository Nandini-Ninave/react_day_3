import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import IncDec from "./components/IncDec"
import { routes } from "./Routes"
import IncDec from "./components/IncDec"
import UseRef from "./components/UseRef"
// import Navlink from "./components/Navlink"
function App(){
  const router = createBrowserRouter(routes)
  return(
    <div><UseRef/>
    <RouterProvider router={router}></RouterProvider>
    </div>
    )
}
export default App