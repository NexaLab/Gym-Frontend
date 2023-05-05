import './App.css';
import { Route, Switch } from 'react-router-dom';
import Customers from "./components/GymCustomer/Customers.jsx";
import store from "./store";
import { Provider } from "react-redux";




function App() {
  return (

    
    <div className="App">
      <Provider store={store}>
      <Switch>

            <Route exact path="/"  component={Customers}/>

      </Switch>
      </Provider>
    </div>
    
  );
}

export default App;
