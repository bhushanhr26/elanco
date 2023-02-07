import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ElancoRoutes from "./Routes";

function App() {
  return (
    <Router>
      <ElancoRoutes />
    </Router>
  );
}

export default App;
