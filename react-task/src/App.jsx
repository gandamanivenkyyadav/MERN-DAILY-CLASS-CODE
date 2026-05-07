
import { BrowserRouter, Route ,Outlet,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="home" element={<Home/>} />
    <Route path="login" element={<Login/>}/>
    <Route path="/" element={<Register/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App