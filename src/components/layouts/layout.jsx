
import Footer from "./footer"
import Header from "./header"
import { Helmet } from "react-helmet"
import {Toaster} from "react-hot-toast"


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
        <Toaster/>
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