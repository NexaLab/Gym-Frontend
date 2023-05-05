import './App.css';
import { Route, Switch } from 'react-router-dom';
import Payment from './components/Payment/Payment';
import store from "./store";
import { Provider } from "react-redux";




function App() {
  return (
    <div className="App">
      <Provider store={store} >
      
      <Switch>

            <Route exact path="/"  component={Payment}/>

      </Switch>
      </Provider>
    </div>
  );
}

export default App;
