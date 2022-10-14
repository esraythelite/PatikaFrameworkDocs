import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import About from './Contents/About'
import Syntax from './Contents/Syntax'
import MiniDrawer from './Components/MiniDrawer'
import Layout from './Components/Layout'
function App() {
  return (
    <div>
    <MiniDrawer/>
    </div>
  );
}

export default App;
