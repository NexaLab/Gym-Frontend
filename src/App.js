import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';




function App() {
  return (
    <div className="App">
      
      <Switch>

            <Route exact path="/"  component={Test}/>

      </Switch>

    </div>
  );
}

export default App;
