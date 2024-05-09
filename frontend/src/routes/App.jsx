import FetchApi from "../components/FetchApi.jsx";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "../styles/App.css";

function App() {
  return (
    <main>
      <Navbar />
      <FetchApi />
      <Outlet />
    </main>
  );
}

export default App;
