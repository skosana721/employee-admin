import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import DisplayEmployees from "./components/DisplayEmployees";
import { Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { history } from "./history";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        {/* <Switch> */}
        <Route path="/" exact component={(props) => <Home {...props} />} />
        <Route
          path="/EmployeeForm"
          exact
          component={(props) => <EmployeeForm {...props} />}
        />
        <Route
          path="/displayEmployees"
          exact
          component={(props) => <DisplayEmployees {...props} />}
        />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
