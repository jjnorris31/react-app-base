import {BrowserRouter} from "react-router-dom";
import { Routes, Route, NavLink} from "react-router-dom"
import logo from "../logo.svg"
import {routes} from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo"/>
          <ul>
            {
              routes.map(route => {
                return <li>
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
              return <Route path={route.path} element={route.Component()}/>
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  )
}
