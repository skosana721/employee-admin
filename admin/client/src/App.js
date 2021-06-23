import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import DisplayEmployees from "./components/DisplayEmployees";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={EmployeeForm} />
          <Route path="/displayEmployees" component={DisplayEmployees} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
