import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import login from './pages/Login';
import NavBar from "./Component/NavBar";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import LandingPage from "./pages/LandingPage";
const App=()=>{
return(
  <>
  <BrowserRouter>
   <NavBar />
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
   <Route path="login" element={<Login/>}/>
   <Route path="register" element={<Register/>}/>
   <Route path="product" element={<Product/>}/>
   <Route path="dashboard" element={<Dashboard/>}/>
   <Route path="home" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>
)
}
  export default App;