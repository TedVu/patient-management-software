import "./App.css";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Link to="/patients">Patient list</Link>
    </div>
  );
}

export default App;
