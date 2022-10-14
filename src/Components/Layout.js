import {Outlet,Link} from "react-router-dom";
import MiniDrawer from "./MiniDrawer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from '../Contents/About'
import Syntax from '../Contents/Syntax'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/syntaxcode">Syntax Code</Link>
          </li>
        </ul>
      </nav>
    <Outlet/>
    </>
  )
};

export default Layout;