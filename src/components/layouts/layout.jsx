
import Footer from "./footer"
import Header from "./header"
import { Helmet } from "react-helmet"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children , title, description, keywords, author }) {
  return (
    <div> 
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="description" content={ description} />
            <meta   name="keywords" content={ keywords}/>
            <meta   name="author" content={ author}/>
            <title>{title}</title>
        </Helmet>
        <Header/>
        <main>
        <ToastContainer/>
        {children}
        </main>
        <Footer/>
    
    </div>
  )
}

  Layout.defaultProps = {
    title :"AJ-Styles-Ecommerce-app",
    description : "worlds no-1 Brand",
    keywords :"AJ-Styles",
    author :"Ajay Banu"

  }

export default Layout