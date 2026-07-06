import type { RouteObject } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AboutHome from "./components/AboutHome";
import Person from "./components/Person";
import UseEffectComp from "./components/UseEffectComp";
import Protectedroute from "./components/Protectedroute";
import Navlink from "./components/Navlink";
import LazyLoading from "./components/LazyLoading";
import Usecallback from "./components/Usecallback";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navlink/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        element:<Protectedroute/>,
        children:[
            {
                path: "/about",
                element: <About/>,
                children:[
                    {
                        path: "contact",
                        element: <Contact/>,
                    },
                    {
                        path: "abouthome",
                        element: <AboutHome/>
                    }
                ]
            }
        ]
    },
    {
        path:"/person/:firstName", 
        element: <Person/>
    },
    {
        path:"/lazyloading",
        element:<LazyLoading/>
    },
    {
        path: "/products",
        element:<UseEffectComp/>
    },
    // {
    //     path: "/usecallback",
    //     element:<Usecallback/>
    // }
]
