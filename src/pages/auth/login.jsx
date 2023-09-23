
 import { useState } from "react";
import Layout from "../../components/layouts/layout";
import axios from "axios";
import toast from "react-hot-toast";
import  { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";


function Login() {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [auth,setAuth] = useAuth()
  const navigate=useNavigate();
  const Location = useLocation();

  const handleSubmit= async(e)=>{
      
    e.preventDefault();
    try {
      const res =await axios.post("/api/v1/auth/login",{
        email,
        password,
      });
      if(res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth",JSON.stringify(res.data))
         navigate(Location.state || "/")
      }else{
        toast.error(res.data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Something went ")
      
    }
  }

  return (

    <Layout title="Register - Ecommer App">
    <div className="form-container " style={{ minHeight: "90vh" }}>
      <form onClick={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button
            type="button"
            className="btn forgot-btn"
          >
            Forgot Password
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default Login