import { useSelector } from "react-redux";
import FetchApi from "./FetchApi";
import Dashboard from "./Dashboard.jsx";

function App() {
  const data = useSelector((state) => state.data);
  return (
    <>
      <FetchApi />
      <Dashboard />
      <h1>react</h1>
      {console.log(data)}
    </>
  );
}

export default App;
