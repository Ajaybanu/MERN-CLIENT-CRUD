
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Contact from './pages/contact'
import PageNotFound from './pages/pageNotFound'
import Policy from './pages/policy'
import About from './pages/about'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import PrivateRoute from './components/Routes/private'
import Dashboard from './pages/User/dashboard'
import ForgetPassword from './pages/auth/forgetPassword'
import AdminRoute from './components/Routes/adminRoute'
import AdminDashboard from './pages/Admin/AdminDashbord'
import CreateProduct from './pages/Admin/CreateProduct'
import CreateCatagory from './pages/Admin/createCatagory'
import Profile from './pages/User/profile'
import Users from './pages/Admin/user'

function App() { 
 

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path="user" element={<Dashboard />} />
      <Route path="user/profile" element={<Profile />} />
    </Route>
  
    <Route path="/dashboard" element={<AdminRoute />}>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/create-category" element={<CreateCatagory />} />
      <Route path="admin/create-product" element={<CreateProduct />} />
      <Route path="admin/users" element={<Users />} />
    </Route>

    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgetPassword />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/policy" element={<Policy />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  )
}

export default App
