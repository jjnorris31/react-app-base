import {BrowserRouter} from "react-router-dom";
import { Routes, Route, NavLink} from "react-router-dom"
import logo from "../logo.svg"
import {routes} from "./routes";
import {Suspense} from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo"/>
            <ul>
              {
                routes.map(route => {
                  return <li key={route.name}>
                    <NavLink to={route.to}
                             className={({isActive}) => isActive ? 'nav-active' : ''}>
                      {route.name}
                    </NavLink>
                  </li>
                })
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(route => {
                return <Route path={route.path} key={route.name} element={<route.Component/>}/>
              })
            }
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
