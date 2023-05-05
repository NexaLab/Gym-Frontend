import './App.css';
import { Route, Switch } from 'react-router-dom';
import Customers from './components/Test/GymCustomer/Customers';




function App() {
  return (
    <div className="App">
      
      <Switch>

            <Route exact path="/"  component={Customers}/>

      </Switch>

    </div>
  );
}

export default App;
