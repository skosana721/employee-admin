import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import DisplayEmployees from "./components/DisplayEmployees";

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <EmployeeForm />
      <DisplayEmployees />
    </div>
  );
}

export default App;
