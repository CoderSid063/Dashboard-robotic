import { useSelector } from "react-redux";
import FetchApi from "../components/FetchApi.jsx";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const data = useSelector((state) => state.data);
  return (
    <main>
      <Navbar />
      <FetchApi />
      <Outlet />
    </main>
  );
}

export default App;
