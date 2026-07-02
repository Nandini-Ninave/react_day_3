import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import IncDec from "./components/IncDec"
import { routes } from "./Routes"
// import Navlink from "./components/Navlink"
function App(){
  const router = createBrowserRouter(routes)
  return(
    <RouterProvider router={router}></RouterProvider>)
    // <div>
      // <IncDec/>
      {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route element={<Protectedroute/>}>
              <Route path="/about" element={<About/>}>
                  <Route path="contact" element={<Contact/>}></Route>
              <Route path="abouthome" element={<AboutHome/>}></Route>
              </Route>
            </Route>
            <Route path="/person/:firstName" element={<Person/>}></Route>
        </Routes>
      </BrowserRouter> */}
    // </div>
  // )
}
export default App


