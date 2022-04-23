import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import ManageTimeTable from "./components/ManageTimeTable"
import AddNewVehicle from "./components/AddNewVehicle";
function App() {
  return (
      <Router>

        <Switch>
          <Route path="/" exact component={Dashboard} />
            <Route path="/manageTimeTable" exact component={ManageTimeTable} />
            <Route path="/addNewVehicle" exact component={AddNewVehicle} />
        </Switch>
      </Router>

  );
}

export default App;
