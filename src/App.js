import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ElancoRoutes from "./Routes";
import Header from "./Components/Header/js/Header";

function App() {
  return (
    <Router>
      <div className="mb-5">
        <Header />
      </div>
      <ElancoRoutes />
    </Router>
  );
}

export default App;
