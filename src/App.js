import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';
import ManageTrainingClasses from './components/ManageTrainingClasses/ManageTrainingClasses';




function App() {
  return (
    <div className="App">
      
      <Switch>

            <Route exact path="/"  component={Test}/>
            <Route exact path="/ManageTrainingClasses"  component={ManageTrainingClasses}/>

      </Switch>

    </div>
  );
}

export default App;
