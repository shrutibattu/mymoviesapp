import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import Saved from "./containers/Saved";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <Saved />
      </Router>
    </div>
  );
}

export default App;
