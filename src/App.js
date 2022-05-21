import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./Route/index";
import Layout from "./Components/Layout/layout";

function App() {
  return (
    <Layout>
      <AppRoutes />;
    </Layout>
  );
}

export default App;
