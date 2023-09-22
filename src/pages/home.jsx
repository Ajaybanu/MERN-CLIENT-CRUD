import Layout from "../components/layouts/layout";
import { useAuth } from "../context/auth";

function Home() {
  const [auth] = useAuth();
  
  return (
    <Layout title={"AJ-Styles HOME"}>
      <h1>hello Home</h1>
      <pre>
        {JSON.stringify(auth, null, 4)}
      </pre>
    </Layout>
  );
}

export default Home;
