import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';
import ManageTrainingClasses from './components/ManageTrainingClasses/ManageTrainingClasses';
import Welcome from './components/Welcome/Welcome';




function App() {
  return (
    <div className="App">
      
      <Switch>
            <Route exact path="/meetingschedule"  component={ManageTrainingClasses}/>
            <Route exact path="/"  component={Welcome}/>
      </Switch>

    </div>
  );
}

export default App;
