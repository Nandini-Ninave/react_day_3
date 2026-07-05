import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import IncDec from "./components/IncDec"
import { routes } from "./Routes"
import IncDec from "./components/IncDec"
import UseRef from "./components/UseRef"
import Usecallback from "./components/Usecallback"
import LazyLoading from "./components/LazyLoading"
import TextInput from "./components/TextInput"
// import Navlink from "./components/Navlink"
function App(){
  const router = createBrowserRouter(routes)
  return(
    <div>
      <TextInput label="name" backgroundColor="blue"/>
     {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
    )
}
export default App