
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Contact from './pages/contact'
import PageNotFound from './pages/pageNotFound'
import Policy from './pages/policy'
import About from './pages/about'
import Register from './pages/auth/register'
import { ToastContainer } from 'react-toastify'

function App() { 
 

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/*' element={<PageNotFound/>}/>
    
   </Routes>
    </>
  )
}

export default App
