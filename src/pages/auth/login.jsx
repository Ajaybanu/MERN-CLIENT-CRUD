
 import Layout from "../../components/layouts/layout";


function Login() {
  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container " style={{ minHeight: "90vh" }}>
      <form>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
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